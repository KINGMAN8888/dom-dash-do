# Dom Dash Do - Todo List Application

A beautiful, modern todo list application built with React, TypeScript, and Tailwind CSS. Features a clean interface with task management capabilities including filtering, stats, and local storage persistence.

![Todo App](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **📝 Task Management**: Add, complete, and delete tasks
- **🔍 Smart Filtering**: Filter tasks by status (All, Active, Completed)
- **📊 Statistics**: Track your productivity with task stats
- **💾 Local Storage**: Your tasks persist between sessions
- **🎨 Beautiful UI**: Modern design with shadcn/ui components
- **📱 Responsive**: Works seamlessly on all devices
- **⚡ Fast**: Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KINGMAN8888/dom-dash-do.git
   cd dom-dash-do
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` to see the application running.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks + Local Storage
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner (Toast notifications)

## 📁 Project Structure

```plaintext
dom-dash-do/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AddTodo.tsx   # Add todo component
│   │   ├── TodoItem.tsx  # Individual todo item
│   │   ├── TodoFilter.tsx # Filter component
│   │   └── TodoStats.tsx # Statistics component
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main todo page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

The application can be deployed on any static hosting service:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure the build settings
3. Your app will be deployed on every push to the main branch

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

### KingmanJou

- GitHub: [@KINGMAN8888](https://github.com/KINGMAN8888)
- Portfolio: [kingmanjou.dev](https://kingmanjou.dev)

---

**Made with ❤️ by KingmanJou**

⭐ Star this repository if you found it helpful!
