import './globals.css' //tailwindcss読み込み
import BlogList from './components/blog-list'

export const metadata = {
  title: 'blog_cliant',
  description: 'Generated by Ruby on Rails & next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <section className="flex">
          <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-300 p-2`}>
            <BlogList />
          </aside>
          <main className="flex flex-1 justify-center bg-gray-400">
            {/* /page.tsx、blog個別ページ、Create New Postページ がレンダリングされる */}
            { children }
          </main>
        </section>
      </body>
    </html>
  )
}