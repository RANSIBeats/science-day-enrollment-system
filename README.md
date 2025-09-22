# Science Day Enrollment System - Netlify Edition

A modern, responsive student enrollment system for Science Day events, built with Next.js and optimized for Netlify deployment.

## 🚀 Features

### Student Registration
- **Responsive Form**: Mobile-friendly registration form with all required fields
- **Real-time Validation**: Instant feedback on form inputs
- **Project Categories**: Support for various science categories (Biology, Chemistry, Physics, Engineering, Environmental Science, Computer Science)
- **School Selection**: Dynamic school dropdown with multiple options
- **Grade Level Tracking**: Support for grades 9-12
- **Mock Submission**: Simulated form submission with loading states and success/error messages

### Dashboard & Management
- **Role-based Access**: Admin, School Official, and Student roles (simulated)
- **Registration Management**: Approve/reject student registrations with real-time updates
- **Statistics Overview**: Visual dashboard showing total, pending, approved, and rejected registrations
- **Interactive Interface**: Click-to-approve/reject functionality
- **Search & Filter**: Easy navigation through registration list

### Technical Features
- **Netlify Optimized**: Built specifically for Netlify deployment with static export
- **Client-side Only**: Works entirely in the browser - no backend required
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional interface with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Deployment**: Netlify (static export)
- **Icons**: Lucide React
- **Build Tool**: Next.js static export

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RANSIBeats/science-day-enrollment-system.git
   cd science-day-enrollment-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Connect to GitHub**
   - Go to your [Netlify dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select the `science-day-enrollment-system` repository

2. **Configure build settings**
   Netlify will automatically detect the settings:
   ```yaml
   Build command: npm run build
   Publish directory: out
   Node version: 18
   ```

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your application

4. **Your site is live!**
   - Your application will be available at a random Netlify URL
   - You can add a custom domain in the site settings

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the output**
   The built files will be in the `out/` directory. You can deploy these files to any static hosting service.

## 🎯 Application Features

### Main Registration Page (`/`)
- Complete student registration form with:
  - Personal information (First Name, Last Name, Email, Phone)
  - Academic details (School selection, Grade level)
  - Project information (Title, Category, Description)
- Real-time form validation
- Responsive design for all screen sizes
- Mock submission with loading states
- Success/error message display
- Navigation to dashboard

### Admin Dashboard (`/dashboard`)
- Registration statistics overview
- List of all student registrations
- Color-coded status badges (Pending, Approved, Rejected)
- Interactive approve/reject buttons
- Real-time status updates
- Mock authentication simulation
- Role-based access demonstration

## 🔧 Configuration

### Environment Variables

This version works with mock data, so no environment variables are required for basic functionality. However, if you want to extend the application, you can add:

```env
# For future database integration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Customization

#### Styling
- Edit `src/app/globals.css` for global styles
- Modify `tailwind.config.js` for Tailwind configuration
- Customize components in `src/components/ui/`

#### Adding New Features
- Pages: Add new files in `src/app/`
- Components: Create in `src/components/ui/`
- Styles: Use Tailwind CSS classes

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface with proper layout
- **Tablet**: Optimized touch interactions and responsive design
- **Mobile**: Compact layout with touch-friendly controls

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and navigation
- **Secondary**: Gray tones for backgrounds and borders
- **Status Colors**: 
  - Yellow: Pending registrations
  - Green: Approved registrations
  - Red: Rejected registrations

### Components
- **Forms**: Clean, accessible form elements with proper validation
- **Cards**: Modern card-based layout for content organization
- **Buttons**: Consistent button styles with hover states
- **Typography**: Clear hierarchy with proper font sizes and weights

## 🚀 Performance

- **Fast Loading**: Static export ensures instant page loads
- **Optimized Assets**: Automatic optimization of images and resources
- **CDN Delivery**: Netlify's global CDN for fast content delivery
- **Caching**: Proper cache headers for optimal performance
- **SEO Friendly**: Meta tags and proper HTML structure

## 🐛 Troubleshooting

### Build Issues
```bash
# Clean build
rm -rf .next out
npm run build
```

### Form Not Working
- The form uses mock data - submissions are simulated
- Check browser console for form submission logs
- All form validation works client-side

### White Screen on Deployment
- Verify `next.config.js` has correct export settings
- Check Netlify build logs for errors
- Ensure all files are properly committed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Netlify](https://netlify.com/) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the [Netlify documentation](https://docs.netlify.com/)
- Review the build logs in your Netlify dashboard

---

**Built with ❤️ for Science Day events**

**Ready for immediate Netlify deployment!** 🚀
