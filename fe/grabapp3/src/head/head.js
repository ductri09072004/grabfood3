import './head.css'

function Head(){
    return(
        <div className='head'>
      <div className='head-top'>
      <p className='grab' onClick={redirectToSearchPage}>GrabFood</p>
      <div className='locationall'>
      <p>Giao đến</p>
       <img className='imgloca' src="https://img.icons8.com/color/48/marker.png" alt="marker"/>
       <p>HO CHI MINH STATUEs - 108</p>
      </div>
      <div className='head-rights'>
      <img className='bagcarts' onClick={redirectToSearchPage2} src="https://img.icons8.com/ios/50/shopping-bag--v1.png" />
       <p className='btnlogins'>Đăng nhập/Đăng kí</p>
       <p className='btnlanguages'>Vie </p>
      </div>
      </div>
      
     </div>
    );
}
function redirectToSearchPage() {
    window.location.href = '/';
}
function redirectToSearchPage2() {
    window.location.href = '/Checkout';
}
export default Head;