# DevCollab - Build Projects Together

A modern, responsive platform where engineering students can collaborate on software projects.

## Features

- **Find Teammates**: Connect with students who share your passion and complement your skills
- **Debug Code Together**: Collaborate in real-time and solve problems faster
- **Share Knowledge**: Learn from others and contribute your expertise to the community
- **Project Discovery**: Browse and join exciting student projects
- **Discussion Forums**: Ask questions and get help from the community

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Start the development server:
\`\`\`bash
pnpm run dev
\`\`\`

4. Open your browser and navigate to \`http://localhost:5173\`

**Note**: Update the `base` path in `vite.config.ts` to match your repository name if different from `/devcollab/`

## Building for Production

\`\`\`bash
pnpm run build
\`\`\`

The built files will be in the \`dist\` directory.

## Pages

- **Home** (`/`) - Landing page with hero section, features, and testimonials
- **Projects** (`/projects`) - Browse and search for projects to join
- **Create Project** (`/create-project`) - Start a new project and find teammates
- **Discussions** (`/discussions`) - Ask questions and help fellow developers
- **Profile** (`/profile`) - View user stats, skills, and project contributions

## Deployment

This project is configured for automatic deployment to GitHub Pages. When you push to the main branch, GitHub Actions will automatically build and deploy the site.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source

Your site will be live at: \`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/\`

**Important**: Make sure the `base` in `vite.config.ts` matches your repository name:
\`\`\`typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
\`\`\`

## License

MIT

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
