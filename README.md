# Ivan Krupik - Portfolio Website

A professional portfolio website showcasing my experience as a Senior Software Engineer with 8+ years of experience in mobile and web development.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Professional Experience**: Detailed timeline of work history and achievements
- **Home Lab Projects**: Showcase of personal infrastructure and IoT projects
- **Technical Skills**: Comprehensive overview of technologies and frameworks
- **Contact Form**: Easy way to get in touch

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Netlify

## 📱 Sections

1. **Hero Section**: Introduction and key highlights
2. **About**: Personal background and statistics
3. **Experience**: Professional work history with detailed achievements
4. **Home Lab**: Personal infrastructure and IoT projects
5. **Skills**: Technical expertise across different categories
6. **Contact**: Multiple ways to connect

## 🏗️ Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── profile_new.jpg     # Profile image
└── README.md           # Project documentation
```

## 🎨 Key Features

### Professional Experience
- **BabyScripts**: Healthcare IoT integration and database migration
- **MascotaMas**: Full-stack pet service platform with 500+ daily users
- **IUNU**: Greenhouse management and AI platform development
- **42i**: Multi-client full-stack development
- **Incluit**: Enterprise mobile and QA automation

### Home Lab Projects
- **Personal Cloud Infrastructure**: TrueNAS, Cloudflare, self-hosted services
- **Mobile Security System**: Solar-powered surveillance with remote access
- **Technical Skills**: Network administration, IoT, automation

### Technical Expertise
- **Mobile**: Flutter, Dart, Android, iOS, Objective-C, Java, Kotlin
- **Frontend**: React, Angular, TypeScript, JavaScript, Next.js
- **Backend**: Node.js, Ruby on Rails, Spring Boot, Python
- **Cloud**: AWS, GCP, Docker, CircleCI, Serverless
- **Databases**: PostgreSQL, DynamoDB, MongoDB, Firebase

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/krupikivan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm ci
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your EmailJS credentials
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

### Deployment

#### Environment Variables Setup

Before deploying, you need to set up EmailJS environment variables in your GitHub repository:
1. **Automatic Deployment**: Every push to the `main` branch triggers automatic deployment
2. **GitHub Pages**: Site is available at `https://krupikivan.github.io/portfolio`
3. **CI/CD Pipeline**: Includes code quality checks and validation

#### Manual Deployment Setup

1. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will handle the rest automatically

2. Push to main branch:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 🔧 Development Workflow

### GitHub Actions Workflows

1. **Deploy Workflow** (`.github/workflows/deploy.yml`):
   - Triggers on push to main branch
   - Builds and deploys to GitHub Pages
   - Automatic deployment with zero configuration

2. **CI Workflow** (`.github/workflows/ci.yml`):
   - Runs on all pushes and pull requests
   - Validates HTML, CSS, and JavaScript
   - Checks file structure and accessibility

### Available Scripts

```bash
npm start       # Start local development server
npm run serve   # Alternative local server
npm run build   # No build required (static site)
npm test        # Run tests
npm run lint    # Run linting
```

## 📧 Contact

- **Email**: krupikivan@gmail.com
- **Phone**: +1 (786) 770-0263
- **LinkedIn**: [linkedin.com/in/krupikivan](https://linkedin.com/in/krupikivan)
- **GitHub**: [github.com/krupikivan](https://github.com/krupikivan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Live Demo
---

Visit the live portfolio at: [https://krupikivan.github.io/portfolio](https://krupikivan.github.io/portfolio)
Built with ❤️ by Ivan Krupik