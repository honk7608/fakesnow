import Link from 'next/link';

export function Menu() {
    // var menuArray = [
    //     {key:1, name: 'background',  display_name: 'Background',  class: 'mainF', href: '/funtion/Background'},
    //     {key:2, name: 'mask',        display_name: 'Mask',        class: 'mainF', href: '/funtion/Mask'},
    //     {key:3, name: 'description', display_name: 'Description', class: '', href: '/description'}
    // ]
    return (
        <ul className='menu'>
            <li key={1}><Link href='/funtion/Background'>{Background}</Link></li>
            <li key={2}><Link href='/funtion/Mask'>{Mask}</Link></li>
            <li key={3}><Link href='/description'>{Description}</Link></li>
        </ul>
    );
}
