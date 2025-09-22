'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import auth from '@/lib/auth'

interface Registration {
  id: string
  student_id: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  student: {
    first_name: string
    last_name: string
    email: string
    project_title: string
    category: string
    school: {
      name: string
    }
  }
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const currentUser = auth.getCurrentUser()
    setUser(currentUser)

    // Subscribe to auth changes
    auth.onAuthChange((user) => {
      setUser(user)
    })

    // Load registrations if user is authenticated
    if (currentUser) {
      loadRegistrations()
    }
  }, [])

  const loadRegistrations = async () => {
    try {
      const response = await fetch('/.netlify/functions/get-registrations')
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data)
      }
    } catch (error) {
      console.error('Error loading registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    auth.login()
  }

  const handleLogout = () => {
    auth.logout()
  }

  const updateRegistrationStatus = async (registrationId: string, status: string) => {
    try {
      const response = await fetch('/.netlify/functions/update-registration', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationId, status }),
      })

      if (response.ok) {
        await loadRegistrations() // Refresh the list
      }
    } catch (error) {
      console.error('Error updating registration:', error)
    }
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                Please login to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleLogin}>
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  const isAdmin = auth.hasRole(user, 'admin')
  const isSchoolOfficial = auth.hasRole(user, 'school_official')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-6xl py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.user_metadata.full_name || user.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardContent className="p-6">
              <p>Loading registrations...</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Registrations</CardTitle>
                <CardDescription>
                  {isAdmin && 'All student registrations'}
                  {isSchoolOfficial && 'Registrations from your school'}
                  {!isAdmin && !isSchoolOfficial && 'Your registrations'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {registrations.length === 0 ? (
                  <p>No registrations found.</p>
                ) : (
                  <div className="space-y-4">
                    {registrations.map((registration) => (
                      <div key={registration.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{registration.student.project_title}</h3>
                            <p className="text-sm text-gray-600">
                              {registration.student.first_name} {registration.student.last_name} - {registration.student.email}
                            </p>
                            <p className="text-sm text-gray-600">
                              School: {registration.student.school.name} | Category: {registration.student.category}
                            </p>
                            <p className="text-sm text-gray-500">
                              Applied: {new Date(registration.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              registration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              registration.status === 'approved' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {registration.status}
                            </span>
                            {(isAdmin || isSchoolOfficial) && registration.status === 'pending' && (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => updateRegistrationStatus(registration.id, 'approved')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => updateRegistrationStatus(registration.id, 'rejected')}
                                >
                                  Reject
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  )
}
