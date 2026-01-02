# Auto-Fill Extension Website

Showcase website for the **Auto-Fill Job Application Assistant** Chrome extension.

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
auto-fill-extension-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   └── sections/                # Page sections
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── BenefitsSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── PlatformsSection.tsx
│       ├── SecuritySection.tsx
│       ├── FAQSection.tsx
│       └── CTASection.tsx
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
└── README.md
```

## 🎨 Styling

This project uses **TailwindCSS** for styling. Custom components and utilities are defined in [app/globals.css](app/globals.css).

### Key Classes:
- `.container-custom` - Responsive container with max-width
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.section-heading` - Large section heading
- `.section-subheading` - Section subtitle

## 📄 Pages

### Home Page (/)
Showcases all features of the Auto-Fill extension with sections for:
- Hero section with CTA
- Features overview
- Benefits for job seekers
- How to use guide
- Supported platforms
- Security & privacy
- FAQ
- Final CTA

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript configuration
- **next.config.js** - Next.js app configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration
- **.eslintrc.json** - ESLint configuration

## 📱 Responsive Design

The website is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Deploy the .next folder to Netlify
```

### Deploy to Any Node.js Server
```bash
npm run build
npm start
```

## 📚 Links

- **GitHub Repository:** [auto-Fill-Extension](https://github.com/neerajdhurandher/auto-Fill-Extension)
- **Extension Source Code:** [GitHub Issues](https://github.com/neerajdhurandher/auto-Fill-Extension/issues)

## 🔗 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Lucide Icons** - Icon library
- **React 18** - UI library

## 📝 Environment Variables

Currently, this project doesn't require any environment variables. All configuration is built-in.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Neeraj Dhurandher**
- GitHub: [@neerajdhurandher](https://github.com/neerajdhurandher)

---

Made with ❤️ to help job seekers save time on applications
