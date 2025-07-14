import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/app/ui/mode-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed bottom-[64px] right-[20px] z-50">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
