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
        title: 'Lỗi!',
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
                  <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fuploads%2FxUrn1%2F1701272244471.jpg&w=256&q=75" width="100%" alt="Logo Digital Services" />
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
            <h4 className='title'>Danh sách thí sinh</h4>
            <h2 className='sub-title'>Sinh Viên Thanh Lịch Việt Nam </h2>
          </div>
          <div className="list-user">

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                {/* <img width="100%" src={img_01} width={"100%"} alt=" /> */}
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703750984671.JPG&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:3058 | FPT</b></p>
                <p>Lượt Bình Chọn: <i>1240</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703755921770.jpg&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:992 | FTU</b></p>
                <p>Lượt Bình Chọn: <i>960</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703750369110.jpg&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:3001 | UTH</b></p>
                <p>Lượt Bình Chọn: <i>928</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703752300363.jpg&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:2032 | VLU</b></p>
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
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703752658148.JPG&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD: 2063 | UTE</b></p>
                <p>Lượt Bình Chọn: <i>863</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703818994432.jpg&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:1127 | VLU</b></p>
                <p>Lượt Bình Chọn: <i>623</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703818920914.jpg&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD: 1861 | HANU </b></p>
                <p>Lượt Bình Chọn: <i>794</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img width="100%" src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703752194026.JPG&w=1920&q=75" />
              </div>
              <div className="content">
                <p><b>SBD:2015 | FPT</b></p>
                <p>Lượt Bình Chọn: <i>721</i></p>
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
