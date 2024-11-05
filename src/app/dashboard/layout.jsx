import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Head allows you to modify the <head> section of the page */}
      <Head>
        <title>Habit Tracker</title>
        <meta name="description" content="A habit tracking app using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className='flex justify-between items-center p-4 border-b border-gray-300 w-full'>
        <h1>Habit Tracker</h1>
        <nav>
          <ul className='flex flex-row gap-4 items-center justify-end'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/habits">Habits</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content area where pages will be rendered */}
      <main className='w-full p-4 flex flex-grow'>
        {children}
      </main>

      {/* Footer */}
      <footer className='flex justify-center items-center p-4 border-t border-gray-300 w-full'>
        <p>© 2024 Habit Tracker. All rights reserved.</p>
      </footer>

    </div>
  );
}
