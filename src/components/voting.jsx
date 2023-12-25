import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { background_home, img_01, img_02, img_03, img_04, img_05, img_06, img_07, img_08 } from './Publics/images/images';

const VotingComponent = () => {

  const navigate = useNavigate();

  const info = localStorage.getItem('dataForm') ? JSON.stringify(localStorage.getItem('dataForm')) : '';
  
  const showAlert = () => {
    if(info != ''){
      Swal.fire({
        text: 'Cảm ơn bạn đã tham gia bình chọn cho thí sinh!',
        icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          navigate('/votting');
        } 
      });
    } else {
      Swal.fire({
        title: 'Thông Báo',
        text: 'Vui lòng đăng nhập để tiếp tục bình chọn!',
        icon: 'error',
        cancelButtonText: 'Hủy',
        showCancelButton: true,
        confirmButtonText: 'Đăng Nhập'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        } 
      });
    }
  };

  return (
    <div className="agency-page">
      {/* <!-- HEADER START --> */}
      <header className="header">
        <div className="header_desk">
          <div className="container">
            <div className="logo">
              {/*<Link to="#">
                <img src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG" width="100%" alt="Logo Digital Services" />
              </Link> */}
            </div>
            <ul>
              <li className="active"><Link to="#">Trang Chủ</Link></li>
              <li><Link to="#">Thể Lệ</Link></li>
              <li><Link to="#">Thông Báo</Link></li>
              <li><Link to="#">Sự Kiện</Link></li>
              <li><Link to="../login">Đăng Nhập</Link></li>
            </ul>
          </div>
        </div>

        <div className="header_mobile">
          <div className="menu_set">
            <div className="container">
              <div className="logo">
                <Link to="#">
                  <img src="https://upload.wikimedia.org/wikipedia/vi/3/30/Logo-NEU.PNG" width="100%" alt="Logo Digital Services" />
                </Link>
              </div>

              <div className="btn_menu_mobile" onclick="activeMenu()">
                <div className="item_menu top"></div>
                <div className="item_menu center"></div>
                <div className="item_menu bottom"></div>
              </div>
            </div>
          </div>

          <div className="menu_move">
            <div className="container">
              <ul>
                <li><Link to="#">Trang Chủ</Link></li>
                <li><Link to="#">Thể Lệ</Link></li>
                <li><Link to="#">Thông Báo</Link></li>
                <li><Link to="#">Sự Kiện</Link></li>
                <li><Link to="../login">Đăng Nhập</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- HEADER END --> */}

      {/* MAIN START */}
      <div className="main">
        {/* <div className="background">
          <img src={background_home} width="100%" alt="" />
        </div> */}
        <div className="container">
            <h2 className='title'>Bảng bình chọn sinh viên</h2>
          <div className="list-user">

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                {/* <img src={img_01} width={"100%"} alt="" /> */}
                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/409213754_763732852458934_4664532186095413824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHfhm7HNBZzFIAaXZXyG_Up2xqaiv4gWIfbGpqK_iBYh-Ah8HbFE-RjR3gU8SdMVlhALftGKpudhgGLS7hBUwN4&_nc_ohc=k5oT72HHVtIAX95zT7Y&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCq5dZXiS6ThkX6Tioi0sqVqtUGDm82N8j7EA8SGsY-aw&oe=658E8AB1" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Lâm Nguyễn Bảo Hoàng</b></p>
                <p>Lượt Bình Chọn: <i>1546</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_02} width={"100%"} alt="" />
                <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/409178631_763732865792266_7008890459244281087_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE4pp5xw31znrWoUeZYlw-q-lJrta3tojD6Umu1re2iMFvDKXeVRX1JMWKFpSRtxur-Bv17cHgOXLc7SR7GgriH&_nc_ohc=ug5T1Ot5cdgAX_9IO6B&_nc_ht=scontent.fhan3-2.fna&oh=00_AfC8VM7j2dXrgyFeakT-ScWqdLKJMOTwWj_Ru_8mn_cO1A&oe=658E88C7" width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Lê Quốc Anh</b></p>
                <p>Lượt Bình Chọn: <i>1437</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_03} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trịnh Khánh Linh</b></p>
                <p>Lượt Bình Chọn: <i>1124</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_04} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Nguyễn Tri Nhân</b></p>
                <p>Lượt Bình Chọn: <i>996</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_05} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Bùi Ngọc Duyên</b></p>
                <p>Lượt Bình Chọn: <i>984</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_06} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Lâm Diệu Loan</b></p>
                <p>Lượt Bình Chọn: <i>890</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_07} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Bùi Minh Tuấn</b></p>
                <p>Lượt Bình Chọn: <i>889</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src={img_08} width={"100%"} alt="" />
              </div>
              <div className="content">
                <p><b>Mai Thế Phú</b></p>
                <p>Lượt Bình Chọn: <i>799</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* MAIN END */}
    </div>
  )
}

export default VotingComponent
