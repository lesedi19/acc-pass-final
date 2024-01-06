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
            <h2 className='title'>DANH SÁCH THÍ SINH</h2>
          <div className="list-user">

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                {/* <img src={img_01} width={"100%"} alt="" /> */}
                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/407098048_751026813733740_5588014595165944053_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeELgbhZIaX5dE-FXX0VhA1WnrnuuenXnGeeue656decZ2IKLy6KxDfEgoicb_IHsKrdKH5v2LAidfgkN8FafVoY&_nc_ohc=04BVmfxh358AX9tnV1L&_nc_ht=scontent.fhan3-5.fna&oh=00_AfB-oqG3ThtF0CN-6GcYD5sozy55L0EQu2UyryCCBiKx_w&oe=659EDE83"" />
              </div>
              <div className="content">
                <p><b>SBD:3058 | FPT</b></p>
                <p>Lượt Bình Chọn: <i>1326</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703751034461.JPG&w=1920&q=75"" />
              </div>
              <div className="content">
                <p><b>SBD:1124 | FPT</b></p>
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
                <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/408514724_751026763733745_704825905293092306_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFojtNnJmWds6h6GEsXkz-UTrXisuuAWc9OteKy64BZz9ZM53Sx0w-J_UmrgR1rp2BDxumeqqjECX7QXKlIJJM5&_nc_ohc=ped-A2ZmuJcAX88L03B&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAbvAUPDH5ggIxecAqfR-p3se57ZPTORG82lC-dakl6Cw&oe=659E9708"" />
              </div>
              <div className="content">
                <p><b>SBD:3001 | FPT</b></p>
                <p>Lượt Bình Chọn: <i>992</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703753270738.JPEG&w=1920&q=75"" />
              </div>
              <div className="content">
                <p><b>SBD:2032 | VLU</b></p>
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
                <img src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703755582821.JPG&w=1920&q=75"" />
              </div>
              <div className="content">
                <p><b>SBD: 2063 | UTE</b></p>
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
                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/405414623_751026800400408_1391227485058402166_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE0yosvbXNQ2ian1pTVZYZTJAiczPu3JbMkCJzM-7clswi74MsJGWyz4oUbRlcThhQm3TEag2TSECKz2Ju84F0v&_nc_ohc=GiibUVWFnZEAX9NBAoE&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCSilvwWOexauYBxDRujiI-y-pJm19x9AQutZbjY9Oy4w&oe=659DC3E0"" />
              </div>
              <div className="content">
                <p><b>SBD:1127 | VLU</b></p>
                <p>Lượt Bình Chọn: <i>867</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src="https://hoakhoisinhvienvietnam.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FxUrn1%2F1703750369110.jpg&w=1920&q=75"" />
              </div>
              <div className="content">
                <p><b>SBD: 1861 | HANU </b></p>
                <p>Lượt Bình Chọn: <i>823</i></p>
              </div>
              <div className="btn_vote">
                <button onClick={showAlert}>
                  Bình Chọn
                </button>
              </div>
            </div>

            <div className="detail-user"  onClick={showAlert}>
              <div className="thumnail">
                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/405478324_751026773733744_5306740271661205502_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEDp2pYBZQX0S1PqBb4c-5mez02P7Gh7Tt7PTY_saHtO-m4ls_BK-sS5tKdqf3nJe49HULetOQHkDn6G1mC4F3W&_nc_ohc=T9lbmAmsWLwAX-0_MPS&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCdRfNQHVVBiNzh_cA40cL-6Ymjon3ci8fhLNMvfLpbgQ&oe=659EC5C8"" />
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
