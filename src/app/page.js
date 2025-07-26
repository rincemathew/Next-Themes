"use client"; // "use client" directive tells Next.js that this component is a client-side component

// Import the useTheme hook from next-themes to get and set the current theme
import { useTheme } from "next-themes";

export default function Home() {
  // Destructure current theme and the function to update the theme
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-screen h-screen">

      <button onClick={() => setTheme('theme-1')}>theme 1</button>
      <button onClick={() => setTheme('theme-2')}>theme 2</button>
      <button onClick={() => setTheme('theme-3')}>theme 3</button>

      <div className="w-full h-1/5 bg-[var(--primary-color)]">
        color 1
      </div>

      <div className="w-full h-1/5 bg-[var(--secondary-color)]">
        color 2
      </div>

      <div className="w-full h-1/5 bg-[var(--third-color)]">
        color 3
      </div>

    </div>
  );
}
