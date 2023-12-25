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
        title: 'Lỗi',
        text: 'Vui lòng đăng nhập để tính lượt bình chọn!',
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
                <img src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/409387421_763732809125605_5230314705331977654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE6Wcjlxz0asy8uOGZSALASCv4ylAIuBJMK_jKUAi4Ek3cf9IFqAjn5-DP4FCtrTsIcdZQUf5WP4ncVDLWvEjUb&_nc_ohc=dvmPZzOwzG0AX8FxCWM&_nc_oc=AQkR_Slrm2GjVUf9wi3_9j_PWa-znIhM640FO26KUr0MFE65dM9h1tYhclhV3zMTfuA&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCyZv8BtF47qX3j8zbfZOmmViZ7zo9MT7dXF4R3DLiwSA&oe=658E2FC9" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Nguyễn Hoàng Minh</b></p>
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
                <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/409178631_763732865792266_7008890459244281087_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE4pp5xw31znrWoUeZYlw-q-lJrta3tojD6Umu1re2iMFvDKXeVRX1JMWKFpSRtxur-Bv17cHgOXLc7SR7GgriH&_nc_ohc=ug5T1Ot5cdgAX_9IO6B&_nc_ht=scontent.fhan3-2.fna&oh=00_AfC8VM7j2dXrgyFeakT-ScWqdLKJMOTwWj_Ru_8mn_cO1A&oe=658E88C7" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Lê Quốc Anh</b></p>
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
                <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/409826661_763732862458933_8293122028972641131_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH-aYbiRjO2KeByOKQPsNwIXu2sGcSs08xe7awZxKzTzEtB-oLg_530e4SsuMv6Hb-Uu7ZgsfaOxdEdMJljlu2G&_nc_ohc=sTY7MqCtWRAAX893lC1&_nc_ht=scontent.fhan4-3.fna&oh=00_AfD1NYZlWlgsdPH118MwpBlTgXnLMRsqg6kxQUxYpZgJgw&oe=658E58B9" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Phạm Thế Hòa</b></p>
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
                <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/409837511_763733022458917_2886267845708787125_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeExpyc8T_0wOqTW80JVT3nG3kB5b9oE77beQHlv2gTvtk38Bgv1osdliIHF-IjAxMUj2lrmanBczaOOEZCs-FRR&_nc_ohc=XotcXZY1n5UAX_HrvKm&_nc_ht=scontent.fhan3-5.fna&oh=00_AfDcB2OpEYbOLzJhPSiAwFuJqRV_3pQXH319c-Tqb6CviQ&oe=658EAA22" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Phan Minh Lộc</b></p>
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
                <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/409806456_763733059125580_3719648758693951368_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHOgALLaJ3IFmGWb8wI9DWkojafGhQD01CiNp8aFAPTUPKnU-PKSQsWUBPgPLW077sY9jLMn33z1M5uf7ATdDH9&_nc_ohc=uUmOBTF4iS0AX9nrT7c&_nc_ht=scontent.fhan3-3.fna&oh=00_AfASM77HvZVvG5sF5aFR_WET1uTB4VsDtO23h5F_5pyLcA&oe=658E43BF" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Phan Văn Hào</b></p>
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
                <img src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/409749211_763733079125578_2352978080733961486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeECkjvOYLRS5hldSkMiWYK_iQ9IuYuFkUSJD0i5i4WRRMCB65W5r7xro3cOs0d7cLpIKh_ZJlVZjTJyKmcuVTdE&_nc_ohc=fvcE0Q3gDNoAX_uuwuG&_nc_ht=scontent.fhan4-2.fna&oh=00_AfB50HZSyr5QPpHuywc49yM_Pth7T4W6ZwTHYh5xm5qWNA&oe=658E6069" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Trần Tấn Phước</b></p>
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
                <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/409721961_763733105792242_1285794618834136899_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEOtfuImXcG15zaXSS23s0oyGFtuvLMuqfIYW268sy6pzAUgU1mckQNPd12dE1bzotFS-ynJvsqntnLw0wB8pSl&_nc_ohc=dPFIIWzEysYAX8Kh5nT&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA20w5qzqDmh2qdA3umqJ70MTUHmmu0Vx0D_UK_0u8MlA&oe=658F0A52" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Võ Thanh Phước</b></p>
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
                <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/409737037_763733359125550_8373716972022066734_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHgOS3XuI5NpEJvjh_RgS8oIYB40UFSZYYhgHjRQVJlhvENG1ajo1ssLUoG6x3ZrnSFXh1xK5hOvkE_sbPgrePK&_nc_ohc=2sps6octLz4AX_gVpf0&_nc_ht=scontent.fhan3-2.fna&oh=00_AfC7z7YUxfxNMnWeWn69AdEPRtyJwXJ9Rmka6H9D-SfX-A&oe=658E28F1" width={"90%"} alt="" />
              </div>
              <div className="content">
                <p><b>Ngô Gia Bảo</b></p>
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
