import React from 'react'
import Icon from '../components/atoms/Icon'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
function LoginPage() {
    const navigate = useNavigate();
    const kayitOlButton = () => {
        return navigate('/register');
    }
    return (
        <div className="container">
            <div className="col align-content-center " style={{ boxShadow: ' 0px 0px 50px 25px rgba(0,0,0,0.75)', height: '320px', backgroundColor: 'rgb(30,30,30)', marginTop: '25vh', borderRadius: '30px' }} >
                <div className="row">
                    <div className="col-3">
                        <img className='login-page-icon' src="../../dumenflix-bg1.png" alt="dumenflix-logo" />
                    </div>
                    <div className="col-5 align-content-center ">
                        <div className="row  ">
                            <div className='col-1' style={{ color: '#77CDFF' }}>
                                <span style={{ WebkitTextStroke: '2px navy', fontSize: '50px', fontWeight: 'bold' }}>Dumen</span>
                            </div>
                            <div className='col-1' style={{ marginLeft: '125px', color: '#F95454', fontSize: '30px' }}>
                                <span style={{ WebkitTextStroke: '2px darkred', fontSize: '50px', fontWeight: 'bold' }}>Flix</span>
                            </div>
                        </div>

                        <p style={{ color: 'white', fontFamily: 'cursive', fontSize: '17px' }}>Yeni nesil bir eğlence platformu olarak, kaliteli içerikleri daha erişilebilir fiyatlarla sunarak izleyicilere benzersiz bir deneyim sunuyoruz. Hem yerli hem de yabancı içeriklerde geniş bir seçenek yelpazesiyle, kesintisiz ve kişiselleştirilmiş bir izleme keyfi vaat ediyoruz. Gelişmiş algoritmalar sayesinde, her zevke hitap eden içeriklere kolayca ulaşabilir, dilediğiniz her an ve her yerde eğlencenin tadını çıkarabilirsiniz. Yüksek kaliteli içeriklere, bütçenizi zorlamadan ulaşmanın yeni yolu burada. <b>Sabit fiyat sabit kalite.</b> </p>
                    </div>
                    <div className="col-4 align-content-center">
                        <div className='me-3 mb-3'>
                            <input className='form-control' type="text" placeholder='Email' />
                        </div>
                        <div className='me-3 mb-3'>
                            <input className='form-control' type="text" placeholder='Şifre' />
                        </div>
                        <div className='text-center d-grid ' style={{ marginLeft: '20px', marginRight: '38px' }}>
                            <input className='btn btn-success' type="button" value="Giriş Yap" />
                        </div>
                        <div className='text-end' style={{ marginRight: '38px', marginTop: '15px' }}>
                            <input className='btn btn-warning' type="button" value="Kayıt Ol" onClick={kayitOlButton} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage