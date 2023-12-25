import Link from 'next/link'
import './globals.css'

export const metadata = {
    title: 'YJ Snow',
    description: 'YJ와사비 2023 2nd project',
}

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"/>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"/>
                <Script src="https://www.auduno.com/clmtrackr/build/clmtrackr.min.js"/>

                <link rel="stylesheet" as="style" crossOrigin="true" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700;900&display=swap" rel="stylesheet"></link>
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
