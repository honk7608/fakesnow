import './globals.css'

export const metadata = {
  title: '스노우 짭',
  description: 'YJ와사비 2023 2nd project',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1 className='title'>FakeSnow</h1>
          <ul className='menu'>
            <li><a href="/">Background</a></li>
            <li><a href="/">Mask</a></li>
          </ul>
        </header>
        <div className='option'>
          세부 선택 및 옵션
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
