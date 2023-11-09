import Link from 'next/link'
import './globals.css'
import { Menu } from './Menu'

export const metadata = {
    title: 'YJ Snow',
    description: 'YJ와사비 2023 2nd project',
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <header>
                    <Link className='logo' href="/"></Link>
                    <Menu />
                </header>
                {children}
            </body>
        </html>
    )
}
