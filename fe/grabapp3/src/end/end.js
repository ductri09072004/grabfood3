import './end.css'

function End(){
    return(
        <div className="end-all">
           
           <div className='e0'>
           <p>GrabFood</p>
           </div>
           

           <div className='e1'>
            <div className='e1_1'>
            <p id='hang1'>Về GrabFood</p>
            <p id='hang1'>Mở quán trên GrabFood</p>
            <p id='hang1'>Trung tâm hỗ trợ</p>
            </div>
           
           <div className='e1_2'>
           <img className='icon' src="https://img.icons8.com/ios-glyphs/30/facebook.png" alt="facebook"/>
           <img className='icon'  src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
           <img className='icon' src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
           </div>
           </div>
           
            
           <div className='e2'>
           <p id='hang2_1'>Về Grab</p>
           <p id='hang2_2'>Trở thành tài xế Grab</p>
           <p id='hang2_3'>Câu hỏi thường gặp</p>  
           </div>

           <div className='e3'>
           <p>Blog</p>   
           </div>
           <div className='e4'>
              <img id='appstore' src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'/>
              <img id='ggplay' src='https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0'/>
           </div>

        </div>
    );
}
export default End;