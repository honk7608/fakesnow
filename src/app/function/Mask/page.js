'use client'
import Script from 'next/script'
import './mask.css'

export default function Func_page(){
    return(
        <>
            <Script src="/sketch.js"/>
            <div className='option'>
                <span className='div_title'>기능 선택</span>
                <div className="selector">
                    <div className='option'>
                        <input type="radio" id='mask1' value={1}   name="maskType"/>
                        <label id='mask1Label' htmlFor='mask1' >악마 뿔</label>
                    </div>

                    <div className='option'>
                        <input type="radio" id='mask2' value={2}   name="maskType"/>
                        <label id='mask2Label' htmlFor='mask2' >안경</label>
                    </div>
                        
                    <div className='option'>
                        <input type="radio" id='mask3' value={3}   name="maskType"/>
                        <label id='mask3Label' htmlFor='mask3' >복면</label>
                    </div>

                    <div className='option'>                    
                        <input type="radio" id='mask4' value={4}   name="maskType"/>
                        <label id='mask4Label' htmlFor='mask4' >불타는 얼굴</label>
                    </div>

                    <div className='option'>
                        <input type="radio" id='mask5' value={5}   name="maskType"/>
                        <label id='mask5Label' htmlFor='mask5' >천사 링</label>
                    </div>
                    
                    <div className='option'>
                        <input type="radio" id='mask6' value={6}   name="maskType"/>
                        <label id='mask6Label' htmlFor='mask6' >콧수염</label>
                    </div>
                        
                    <div className='option'>
                        <input type="radio" id='mask7' value={7}   name="maskType"/>
                        <label id='mask7Label' htmlFor='mask7' >해골</label>
                    </div>
                        
                    <div className='option'>
                        <input type="radio" id='mask8' value={8}   name="maskType"/>
                        <label id='mask8Label' htmlFor='mask8' >호박</label>
                    </div>
                        
                    <div className='option'>
                        <input type="radio" id='mask9' value={9}   name="maskType"/>
                        <label id='mask9Label' htmlFor='mask9' >중세 투구</label>
                    </div>
                        
                    <div className='option'>
                        <input type="radio" id='mask10' value={10} name="maskType"/>
                        <label id='mask10Label' htmlFor='mask10' >노드 표시</label>
                    </div>
                </div>
            </div>
            <main>
            </main>
        </>
        )
}
