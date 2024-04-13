

function Head(){
    return(
        <div className='head'>
      <div className='head-top'>
      <p className='grab' onClick={redirectToSearchPage}>GrabFood</p>
      <div className='locationall'>
      <p>Giao đến</p>
       <img className='imgloca' src="https://img.icons8.com/color/48/marker.png" alt="marker"/>
       <p>HO CHI MINH STATUE - 108</p>
      </div>
      <div className='head-right'>
      <img className='bagcart' onClick={redirectToSearchPage2} src="https://img.icons8.com/ios/50/shopping-bag--v1.png" />
       <p className='btnlogin'>Đăng nhập/Đăng kí</p>
       <p className='btnlanguage'>Vie </p>
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