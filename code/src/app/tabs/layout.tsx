import Link from "next/link";

export default function Layout({
      children,
    }: {
      children: React.ReactNode,
    }) {
      return (
        <section>
          <div>
            Tabs
          </div>
          <div>
            <Link href='/tabs/common'>Common</Link>
            <Link href='/tabs/settings'>Settings</Link>
            <Link href='/tabs/dashboard'>Dashboard</Link>
          </div>
          <div>
            {children}  
          </div>
        </section>
      );
    }