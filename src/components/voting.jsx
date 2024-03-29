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
          navigate('/');
        } 
      });
    } else {
      Swal.fire({
        title: 'Thông báo',
        text: 'Vui lòng đăng nhập để tính lượt bình chọn.',
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
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fuploads%2FxUrn1%2F1701272244471.jpg&w=256&q=75" width="100%" alt="Logo Digital Services" />
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
                  <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fuploads%2FxUrn1%2F1701272244471.jpg&w=256&q=75" alt="Logo Digital Services" />
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
          <img width="100%" src={background_home} width="100%" alt=" />
        </div> */}
        <div className="container">
          <div className="main-title">
            <h4 className='title'>DANH SÁCH THÍ SINH</h4>
            <h2 className='sub-title'>Sinh Viên Thanh Lịch </h2>
          </div>
          <div className="list-user">

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                {/* <img width="100%" src={img_01} width={"100%"} alt=" /> */}
                <img width="100%" src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/4/7/photo-2-16809306737721358103395.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12A1</b></p>
                <p>Lượt Bình Chọn: <i>978</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://kenh14cdn.com/203336854389633024/2023/4/7/photo-6-16809307051501223675626.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12A2</b></p>
                <p>Lượt Bình Chọn: <i>723</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/9YXyzpA.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12A3</b></p>
                <p>Lượt Bình Chọn: <i>689</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/bG8x3c0.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12A4</b></p>
                <p>Lượt Bình Chọn: <i>619</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/fr2XFyH.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12B1</b></p>
                <p>Lượt Bình Chọn: <i>581</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/AjvbVbr.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12B2</b></p>
                <p>Lượt Bình Chọn: <i>538</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/LNCHbLA.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12B3</b></p>
                <p>Lượt Bình Chọn: <i>507</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://i.imgur.com/1ZzAKMq.jpg" />
              </div>
              <div className="content">
                <p><b>Lớp 12B4</b></p>
                <p>Lượt Bình Chọn: <i>421</i></p>
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
