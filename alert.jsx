@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-inter: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    --background: 228 100% 7%;
    --foreground: 0 0% 95%;
    --card: 228 80% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 228 80% 10%;
    --popover-foreground: 0 0% 95%;
    --primary: 228 100% 29%;
    --primary-foreground: 0 0% 95%;
    --secondary: 24 100% 50%;
    --secondary-foreground: 0 0% 100%;
    --muted: 228 40% 15%;
    --muted-foreground: 228 10% 60%;
    --accent: 24 100% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 228 40% 18%;
    --input: 228 40% 18%;
    --ring: 24 100% 50%;
    --chart-1: 24 100% 50%;
    --chart-2: 228 100% 29%;
    --chart-3: 0 0% 95%;
    --chart-4: 228 60% 45%;
    --chart-5: 24 80% 65%;
    --radius: 0.25rem;
    --sidebar-background: 228 100% 7%;
    --sidebar-foreground: 0 0% 95%;
    --sidebar-primary: 228 100% 29%;
    --sidebar-primary-foreground: 0 0% 95%;
    --sidebar-accent: 24 100% 50%;
    --sidebar-accent-foreground: 0 0% 100%;
    --sidebar-border: 228 40% 18%;
    --sidebar-ring: 24 100% 50%;
  }

  .dark {
    --background: 228 100% 7%;
    --foreground: 0 0% 95%;
    --card: 228 80% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 228 80% 10%;
    --popover-foreground: 0 0% 95%;
    --primary: 228 100% 29%;
    --primary-foreground: 0 0% 95%;
    --secondary: 24 100% 50%;
    --secondary-foreground: 0 0% 100%;
    --muted: 228 40% 15%;
    --muted-foreground: 228 10% 60%;
    --accent: 24 100% 50%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 228 40% 18%;
    --input: 228 40% 18%;
    --ring: 24 100% 50%;
    --chart-1: 24 100% 50%;
    --chart-2: 228 100% 29%;
    --chart-3: 0 0% 95%;
    --chart-4: 228 60% 45%;
    --chart-5: 24 80% 65%;
    --sidebar-background: 228 100% 7%;
    --sidebar-foreground: 0 0% 95%;
    --sidebar-primary: 228 100% 29%;
    --sidebar-primary-foreground: 0 0% 95%;
    --sidebar-accent: 24 100% 50%;
    --sidebar-accent-foreground: 0 0% 100%;
    --sidebar-border: 228 40% 18%;
    --sidebar-ring: 24 100% 50%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground font-inter;
  }
}

@layer utilities {
  .text-gradient-orange {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600;
  }
}