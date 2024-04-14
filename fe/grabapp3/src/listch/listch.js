import './listch.css'

function  Listch(){
    return(
        <div className="home-all">
            <div>
              <input type="search" id="searchBox" name="searchBox" placeholder="Tim món hoặc quán ăn..."/>
            </div>
            <div className='re-head'>
              <div className='re-head-con'>
                <p id='near1'>Gần tôi</p>
                <img id='img-re-near' src='https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg'/>
              </div>
              <div className='re-head-con'>
                <p id='near1'>Gần tôi</p>
                <img id='img-re-near' src='https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg'/>
              </div>
              <div className='re-head-con'>
                <p id='near1'>Gần tôi</p>
                <img id='img-re-near' src='https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg'/>
              </div>
              <div className='re-head-con'>
                <p id='near1'>Gần tôi</p>
                <img id='img-re-near' src='https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg'/>
              </div>
              
               
               
            </div>
            <div className='tox'>
            <p id='to1'>Món ngon gần bạn</p>
            </div>
            <div className='list-food-all'>
                <div className='list-food' onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006hz/hero/6d51ad327abb4077938b5ef5c9fe4a72_1710867599871517931.webp'/>
                   <p id='name-food'>McDonald's - Bến Thành</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000003dz/hero/6239aaaf0da14509b58ea9523e5ce557_1682659787771674135.webp'/>
                   <p id='name-food'>Bánh mì chim chạy</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-CYN2CN3TATUYAT/hero/376fddd955e547febf897eec7949195f_1607507875021998064.webp'/>
                   <p id='name-food'>Thức Coffee - 156B Pasteur</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C6BFGRKTLLCJVJ/hero/dd3ac29a6b584ccfa0112cd67f499761_1711719652268541200.webp'/>
                   <p id='name-food'>7-Eleven Food - 118 Pasteur D1</p>                                                                    
                   <p id='des-food'>Món khacs</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
            
            </div>
            <div className='tox'>
            <p id='to1'>Quán ăn tại</p>
            <p id='to2'>Hồ Chí Minh, P.Bến Nghé, Q1</p>
            </div>
            <div className='list-food-all'>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006hz/hero/6d51ad327abb4077938b5ef5c9fe4a72_1710867599871517931.webp'/>
                   <p id='name-food'>McDonald's - Bến Thành</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000003dz/hero/6239aaaf0da14509b58ea9523e5ce557_1682659787771674135.webp'/>
                   <p id='name-food'>Bánh mì chim chạy</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-CYN2CN3TATUYAT/hero/376fddd955e547febf897eec7949195f_1607507875021998064.webp'/>
                   <p id='name-food'>Thức Coffee - 156B Pasteur</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C6BFGRKTLLCJVJ/hero/dd3ac29a6b584ccfa0112cd67f499761_1711719652268541200.webp'/>
                   <p id='name-food'>7-Eleven Food - 118 Pasteur D1</p>                                                                    
                   <p id='des-food'>Món khacs</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006hz/hero/6d51ad327abb4077938b5ef5c9fe4a72_1710867599871517931.webp'/>
                   <p id='name-food'>McDonald's - Bến Thành</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000003dz/hero/6239aaaf0da14509b58ea9523e5ce557_1682659787771674135.webp'/>
                   <p id='name-food'>Bánh mì chim chạy</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-CYN2CN3TATUYAT/hero/376fddd955e547febf897eec7949195f_1607507875021998064.webp'/>
                   <p id='name-food'>Thức Coffee - 156B Pasteur</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C6BFGRKTLLCJVJ/hero/dd3ac29a6b584ccfa0112cd67f499761_1711719652268541200.webp'/>
                   <p id='name-food'>7-Eleven Food - 118 Pasteur D1</p>                                                                    
                   <p id='des-food'>Món khacs</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000006hz/hero/6d51ad327abb4077938b5ef5c9fe4a72_1710867599871517931.webp'/>
                   <p id='name-food'>McDonald's - Bến Thành</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000003dz/hero/6239aaaf0da14509b58ea9523e5ce557_1682659787771674135.webp'/>
                   <p id='name-food'>Bánh mì chim chạy</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-CYN2CN3TATUYAT/hero/376fddd955e547febf897eec7949195f_1607507875021998064.webp'/>
                   <p id='name-food'>Thức Coffee - 156B Pasteur</p>                                                                    
                   <p id='des-food'>Cơm, bún-Phở-Cháo</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                    
                   </div>
                </div>
                <div className='list-food'onClick={redirectToSearchPage}>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C6BFGRKTLLCJVJ/hero/dd3ac29a6b584ccfa0112cd67f499761_1711719652268541200.webp'/>
                   <p id='name-food'>7-Eleven Food - 118 Pasteur D1</p>                                                                    
                   <p id='des-food'>Món khacs</p>
                   <div className='list-con'>
                     <img id='icon-list' src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1"/>
                     <p>3.3</p>
                     <img id='icon-list' src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1"/>
                     <p>15 phút</p>
                     <p>+ 2 km</p>
                   </div>
                   <div>
                    <div className='list-con1'>
                         <img id='icon-list' src="https://img.icons8.com/ios/50/price-tag-usd--v1.png" alt="price-tag-usd--v1"/> 
                         <p>Ưu đãi đến 52k</p>
                    </div>
                   </div>
                </div>
            </div>
            
            
        </div>
    );
}
function redirectToSearchPage() {
    // Chuyển hướng đến trang khác
    window.location.href = '/App';
}
  
export default Listch;