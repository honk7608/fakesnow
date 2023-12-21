import Image from 'next/image'
import './description.css'

export default function Description(props) {
    props.params.f_name = 'description'
    return (
        <main>
            <div className="page_introduction">
                <div className="page_title">
                    어떻게 만들었는가
                </div>
                <div className="page_subtitle">
                    탐구 중 이용한 프로세싱 툴 관련 링크 첨부
                </div>
            </div>
            <div className='page_content'>
                <a className='otherpage_link' href='https://opencv.org'>
                    <img src='/desc/opencv.png'>
                    </img>
                    opencv 소개 홈페이지
                </a>
                <a className='otherpage_link' href='https://p5js.org'>
                    <img src='/desc/p5js.png'>
                    </img>
                    p5js 소개 홈페이지
                </a>
            </div>
        </main>
    )
}