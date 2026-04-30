const skillsData = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    category_es: "Lenguajes",
    category_en: "Languages",
    chips: ["Rust 1.77+", "TypeScript", "JavaScript ES6+", "SQL"]
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    category_es: "Frontend",
    category_en: "Frontend",
    chips: ["React 19", "Next.js 15", "Tailwind CSS 4", "Vite 7", "SCSS/Sass", "HTML5/CSS3", "PWA"]
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>`,
    category_es: "Backend & BaaS",
    category_en: "Backend & BaaS",
    chips: ["Node.js", "Supabase", "RLS/RBAC", "Tauri v2"]
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    category_es: "Bases de Datos",
    category_en: "Databases",
    chips: ["PostgreSQL", "SQLite", "LanceDB (Vector)", "Supabase"]
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
    category_es: "IA & Tooling",
    category_en: "AI & Tooling",
    chips: ["Ollama (LLM local)", "Gemini API", "DeepSeek API", "GLM-OCR", "Tiptap 3", "KaTeX", "nomic-embed-text"]
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21 1.95 2 4.5 2s4.5-.79 4.5-2c0-.83-.5-2.24-2-3.5"></path><path d="M15 2c1 0 5.5 1.5 7 5.5s1.5 7 1.5 7-1.5 1.5-1.5 1.5-1.5 0-1.5-1.5-1.5-7-5.5-7.5s-5.5-1-5.5-1"></path><path d="M15.5 15.5L11 20l-4-4 4.5-4.5"></path><path d="M10 8.5L14.5 4"></path></svg>`,
    category_es: "DevOps & Otros",
    category_en: "DevOps & Others",
    chips: ["Git / GitHub", "GitHub Actions", "GitFlow", "OneSignal", "TanStack Query", "reqwest/tokio"]
  }
];

const projectsData = [
  {
    featured: true,
    title_es: "Studili",
    title_en: "Studili",
    tag_es: "App de Escritorio · IA Local",
    tag_en: "Desktop App · Local AI",
    desc_es: "Ecosistema local-first para gestión de aprendizaje. App nativa multiplataforma con IA offline, OCR, editor enriquecido con KaTeX, base de datos vectorial y captura de pantalla integrada. Diversos módulos para notas, flashcards, resúmenes y chat IA local, todo con enfoque en privacidad y rendimiento.",
    desc_en: "Local-first learning management ecosystem. Cross-platform native app with offline AI, OCR, rich editor with KaTeX, vector database, and built-in screenshot capture.Multiple modules for notes, flashcards, summaries, and local AI chat, all with a focus on privacy and performance.",
    stack: ["Tauri v2", "Rust", "React 19", "LanceDB", "Ollama", "GLM-OCR", "Tiptap 3", "nomic-embed-text"],
    github: "https://github.com/richpix/studili",
    demo: null,
    preview: {
      type: "gallery",
      images: [
        "https://img.soyricardo.cc/studili/img1.png",
        "https://img.soyricardo.cc/studili/img2.png",
        "https://img.soyricardo.cc/studili/img3.png",
        "https://img.soyricardo.cc/studili/img4.png",
        "https://img.soyricardo.cc/studili/img5.png",
        "https://img.soyricardo.cc/studili/img6.png",
        "https://img.soyricardo.cc/studili/img7.png",
      ]
    }
  },
  {
    featured: true,
    title_es: "CEA Vision Global",
    title_en: "CEA Vision Global",
    tag_es: "Plataforma Web · PWA",
    tag_en: "Web Platform · PWA",
    desc_es: "Plataforma comunitaria con SSR, notificaciones push, soporte offline robusto, gestión de roles RBAC y optimización de estado con TanStack Query.",
    desc_en: "Community platform with SSR, push notifications, robust offline support, RBAC role management, and state optimization with TanStack Query.",
    stack: ["Next.js 15", "Supabase", "TanStack Query", "Serwist", "OneSignal", "RLS"],
    github: "https://github.com/richpix",
    demo: "https://ceavisionglobal.com",
    preview: {
      type: "iframe",
      url: "https://ceavisionglobal.com"
    }
  },
  {
    featured: true,
    title_es: "epubAItranslate",
    title_en: "epubAItranslate",
    tag_es: "Automatización IA",
    tag_en: "AI Automation",
    desc_es: "Aplicación de esctritorio para MacOS Y Windows hecho con Rust para traducción automatizada de libros EPUB con LLMs. Procesamiento concurrente de capítulos, backoff exponencial y preservación estricta del HTML.",
    desc_en: "Desktop application for MacOS and Windows built with Rust for automated EPUB book translation using LLMs. Concurrent chapter processing, exponential backoff, and strict HTML preservation.",
    stack: ["Rust", "reqwest", "tokio", "DeepSeek API", "futures-util", "Gemini API", "OpenAI API"],
    github: "https://github.com/richpix/epubAItranslate",
    demo: null,
    preview: {
      type: "gallery",
      images: [
        "https://img.soyricardo.cc/epubtranslate/img1.png",
        "https://img.soyricardo.cc/epubtranslate/img2.png",
        "https://img.soyricardo.cc/epubtranslate/img3.png",
        "https://img.soyricardo.cc/epubtranslate/img4.png",
        "https://img.soyricardo.cc/epubtranslate/img5.png",
        "https://img.soyricardo.cc/epubtranslate/img6.png"


      ]
    }
  }
];
