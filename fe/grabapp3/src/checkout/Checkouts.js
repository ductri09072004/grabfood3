import './check.css'

function Checkout(){
    return(
        <div className='check-all'>
            <div className='top'>
                <p id='top1_1'>Bước cuối cùng - Thanh toán</p>
                <p id='top1_2'>Thế Giới Cơm Tấm - Bún Thịt Nướng - Xôi Mặn</p>
            </div>
            <div className='final-all'>
            <div className='final2'>
                 <p id='giao'>Giao đến</p>
                 <p id='delivery'>Delivery arrival time</p>
                 <p id='min'>20 min 2,8 km away</p>
                 <div className='final-mide'>
                    <div className='left-final'>
                    <img src='https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/ImageFP/ghim-dia-chi-tren-google-maps-bangmay-tinh-1.jpg'/>
                    </div>
                    <div className='right-final'>
                     <p id='ct'>Địa chỉ</p>
                     <p id='at'>108 Nguyễn Huệ,P.Bến Nghé, Q1,Hồ Chí Minh</p>
                     <p id='ct'>Chi tiết địa chỉ</p>
                     <input type="search" id="diachi" name="searchBox" placeholder="Địa chỉ..."/>
                     <p id='ct'>Ghi chú cho tài xế</p>
                     <p id='at'>Hãy gặp tôi tại sảnh</p>
                    </div>
                 </div>
            
            </div>
            <div className='final3'>
                 <p id='giao'>Tóm tắt đơn hàng</p>
                 <div className='final3_1'>
                    <div className='sl'>
                     <p id='tru'>_</p>
                     <p id='num'>1</p>
                     <p id='plus'>+</p> 
                    </div>
                 
                 <img id='imgfood-final' src='https://food-cms.grab.com/compressed_webp/items/VNITE20211231065535114198/photo/menueditor_item_8b6a225fcbc942ecb2158751458fac16_1641179063017966093.webp'/>
                 <p id='namefoodfinal'>Cơm tấm đặc biệt 2 + Trà tắc olong ly 850ml</p>
                 <p id='cb'>75.000</p>
                 </div>
                 <div className='h'>
                    <div  className='h1'>
                       <p >Tổng tạm tính</p>
                       <p id='p1'>75.000đ</p>
                    </div>
                    <div className='h2'>
                       <p>Phí áp dụng</p>
                       <p id='p2'>19.000đ</p>
                    </div>
                 </div>
                 
            </div>
            <div className='final4'>
                <p id='giao'>Chi tiết thanh toán</p>
                <p id='cash'>Phương thức thanh toán</p>
                <div className='pt_cash'>
                <img id='img_cashs' src="https://img.icons8.com/windows/32/cash--v2.png" alt="cash--v2"/>
                <p id='ew'>Tiền mặt</p>
                </div>

                <p id='cash'>Hồ sơ</p>
                <div className='pt_cash'>
                <img id='img_cashs'  src="https://img.icons8.com/windows/32/person-male.png" alt="person-male"/>
                <p  id='ew'>Personal</p>
                </div>
                
            </div>
            <div className='final5'>
                <p id='giao'>Khuyến mãi</p>
                <div className='final5_1'>
                <input type="search" id="promotion" name="searchBox" placeholder="Nhập mã khuyến mãi"/>
                <p id='cv'>Áp dụng</p>
                </div>
                
            </div>
            </div>
            <div className='bottom'>
                <div className='total'>
                <p>Tổng cộng</p>
                <p id='gia_94'>94.000 đ</p>
                </div>
                <div className='datdon'>
                <p>Đặt đơn</p>
                </div>
                
            </div>
        </div>
    );
}
export default Checkout;