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
            <head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
                <script src="https://www.auduno.com/clmtrackr/build/clmtrackr.min.js"></script>
            
                <meta charset="utf-8" />
            </head>

            <body>
                <header>
                    <Link className='logo' href="/"></Link>
                    <ul className='menu'>
                        <li key={1}><Link href='/function/Background'>Background</Link></li>
                        <li key={2}><Link href='/function/Mask'>Mask</Link></li>
                        <li key={3}><Link href='/description'>Description</Link></li>
                    </ul>
                </header>
                {children}
            </body>
        </html>
    )
}
