"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Background from './function/[f_name]/page';

export function Menu() {
    const params = useParams()
    console.log(params)
    var menuArray = [
        {key:1, name: 'background',  display_name: 'Background',  class: 'mainF', href: '/funtion/Background'},
        {key:2, name: 'mask',        display_name: 'Mask',        class: 'mainF', href: '/funtion/Mask'},
        {key:3, name: 'description', display_name: 'Description', class: '', href: '/description'}
    ]
    return (
        <ul className='menu'>
            {menuArray.map((item)=>{
                return (
                    <li key={item.key} className={((params.f_name == item.name) ? "active " : "") + item.class}><Link href={item.href}>{item.display_name}</Link></li>
                )
            })}
        </ul>
    );
}
