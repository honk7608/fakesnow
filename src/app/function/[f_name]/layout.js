import './page.css'
// props.params.f_name
export default function Layout(props){
    return (
        <>
            <div className='option'>
                <span className='div_title'>세부 설정 및 기능</span>
            </div>
            <main>
                {props.children}
            </main>
        </>
    )
}