import './mask.css'
export default function Func_page(){
    return(
        <>
            <div className='option'>
                <span className='div_title'>세부 설정 및 기능</span>
                <div className="selector">
                    <input type="radio" id='mask1' value={1}   name="maskType"/>1
                    <label htmlFor='mask1' >
                    </label>
                    
                    <input type="radio" id='mask2' value={2}   name="maskType"/>2
                    <label htmlFor='mask2' >
                    </label>
                    
                    <input type="radio" id='mask3' value={3}   name="maskType"/>3
                    <label htmlFor='mask3' >
                    </label>
                    
                    <input type="radio" id='mask4' value={4}   name="maskType"/>4
                    <label htmlFor='mask4' >
                    </label>
                    
                    <input type="radio" id='mask5' value={5}   name="maskType"/>5
                    <label htmlFor='mask5' >
                    </label>
                    
                    <input type="radio" id='mask6' value={6}   name="maskType"/>6
                    <label htmlFor='mask6' >
                    </label>
                    
                    <input type="radio" id='mask7' value={7}   name="maskType"/>7
                    <label htmlFor='mask7' >
                    </label>
                    
                    <input type="radio" id='mask8' value={8}   name="maskType"/>8
                    <label htmlFor='mask8' >
                    </label>
                    
                    <input type="radio" id='mask9' value={9}   name="maskType"/>9
                    <label htmlFor='mask9' >
                    </label>
                    
                    <input type="radio" id='mask10' value={10} name="maskType"/>0
                    <label htmlFor='mask10'>
                    </label>
                </div>
            </div>
            <main>
                <script src="/sketch.js"></script>
            </main>
        </>
        )
}
