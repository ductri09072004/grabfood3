import './Index.css'

function  Home(){
    return(
        <div className="home-all">
            <div className="img-head">
                <img src="https://images.foody.vn/brand/s1170x300/foody-upload-api-foody-banner%20foody-flagship%201170x330%20fc-6368219982-190104115655.jpg"/>
            </div>
            <div className='loca'>
                 <p id='good'>Good Afternoon</p>
                 <p id='hi'>Where should we deliver your food today?</p>
                 <div className='loca1'>
                    <img id='lo1' src='https://img.icons8.com/color/48/marker.png'/>
                    <p>HO CHI MINH CITY STATUE</p>
                    <img id='lo2' src="https://img.icons8.com/carbon-copy/100/worldwide-location.png" alt="worldwide-location"/>
                 </div>
                  <div class='btnsearch' onClick={redirectToSearchPage}>
                   <p>Tìm kiếm</p>
                  </div>
                
            </div>
            <div className='to'>
            <p id='to1'>Ưu đãi GrabFood tại</p>
            <p id='to2'>Hồ Chí Minh, P.Bến Nghé, Q1</p>
            </div>
            <div className='list-food-all' onClick={redirectToSearchPage3}>
                  <div className='list-food'>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C3AJMCDFVUXWTN/hero/517be4009aed4f0c9b50ff1380f1f9bf_1641880346994544229.webp'/>
                   <p id='name-food'>Thế giới cơm tấm-Bún thịt nướng-Xôi mặn</p>                                                                    
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
                <div className='list-food'>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/5-C4B1V6TGJAXEEJ/hero/44dc7824-06d8-45c5-ad2f-b72e76c715b4__store_cover__2023__05__15__07__31__44.webp'/>
                   <p id='name-food'>Thế giới cơm tấm-Bún thịt nướng-Xôi mặn</p>                                                                    
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
                <div className='list-food'>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000002qn/hero/29f794daa7344f13be62f45927aba2de_1663539629745752204.webp'/>
                   <p id='name-food'>Thế giới cơm tấm-Bún thịt nướng-Xôi mặn</p>                                                                    
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
                <div className='list-food'>
                   <img src='https://food-cms.grab.com/compressed_webp/merchants/VNGFVN000001yv/hero/a66500e3-db39-4dfa-a167-1278767f6d1a__store_cover__2024__01__15__08__51__53.webp'/>
                   <p id='name-food'>Thế giới cơm tấm-Bún thịt nướng-Xôi mặn</p>                                                                    
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
               <div className='seeall'>
                  <p>See all promotions</p>
               </div>
            </div>
            <div className='to_1'>
            <p>There's something for everyone!</p>
            </div>
            <div className='list-re-all'onClick={redirectToSearchPage3}>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/209/icons/upload-photo-icon_65f41b40038b4b3ea672402e609d0e96_1548908793958778523.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/69/icons/FriedChicken_4251b520449049528751b74b4d05ffa1_1547819155005255038.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp'/>
                   <p>Weekend Treats</p>
                </div>
                <div className='list-re'>
                   <img src='https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp'/>
                   <p>Weekend Treats</p>
                </div>
            </div>
            <div className='end-home-all'>
            <p id='why'>Vì sao bạn nên Order trên GrabFood?</p>
            <div className='content1'>
            <p>Nhanh nhất - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</p>
            <p>Dễ dàng nhất - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</p>
            <p>Đáp ứng mọi nhu cầu - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.</p>
            <p>Thanh toán dễ dàng - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</p>
            <p>hiều quà tặng hơn - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.</p>
            </div>
            <p id='why'>Những câu hỏi thường gặp</p>
            <p id='why1'>GrabFood là gì?</p>
            <p className='content1'>Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.</p>
            </div>
            <div className='seeall2'>
                  <p>Read more</p>
            </div>
            <div className='intro-end-all'>
                <div className='intro-end1'>
                    <img src='https://food.grab.com/static/page-home/bottom-food-options.svg'/>
                    <p>Curated restaurants</p>
                    <p>From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</p>
                </div>
                <div className='intro-end2'>
                     <img id='img-left' src='https://food.grab.com/static/images/ilus-cool-features-app.svg'/>
                     <p>More cool features available on the app</p>
                     <p>Download Grab app to use other payment methods and enjoy seamless communication with your driver.</p>
                     <div className='intro-icon'>
                         <img id='appstore' src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'/>
                         <img id='ggplay' src='https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0'/>
                     </div>
                </div>
            </div>
        </div>
    );
}
function redirectToSearchPage() {
    // Chuyển hướng đến trang khác
    window.location.href = '/Listch';
}
function redirectToSearchPage3() {
   // Chuyển hướng đến trang khác
   window.location.href = '/App';
}
  
export default Home;