import "./globals.css";

// Import the ThemeProvider from next-themes, which allows dynamic theme switching
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "next themes",   
  description: "next themes example",
};

export default function RootLayout({ children }) {
  return (
    // `suppressHydrationWarning` is used to prevent React hydration mismatch warnings
    <html lang="en" suppressHydrationWarning>

      <body>
        {/* ThemeProvider enables dynamic theming via `next-themes` */}
        {/* 
            attribute="data-theme" – sets the theme by applying a `data-theme="theme-name"` attribute
            defaultTheme="theme-1" – sets the initial theme on first load
            enableSystem={false} – disables auto-detecting user's OS theme (light/dark)
        */}
        <ThemeProvider attribute="data-theme" defaultTheme="theme-1" enableSystem={false}>
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
