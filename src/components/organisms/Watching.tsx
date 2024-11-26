import React from 'react'
import Header from './Header'
import HeaderTabs from '../molecules/HeaderTabs'
import Footer from './Footer'
import ReactPlayer from 'react-player'
import { IWatchingPage } from '../../models/IWatchingPage'
import CardInfo from '../molecules/CardInfo'


function Watching() {
    const { name, imageUrl, videoUrl, genre, rating, productionYear, contentDetails }: IWatchingPage = {
        name: 'Matrix',
        imageUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1600/1*heL-f8bPywxsNG2snNPIwQ.jpeg',
        videoUrl: 'https://www.youtube.com/watch?v=8fT-l0YYLHI',
        genre: 'Aksiyon',
        rating: 4,
        productionYear: 1999,
        contentDetails: 'Saygın bir yazılım şirketinde bilgisayar programcısı olarak çalışan Thomas Anderson, yetenekli bir bilgisayar korsanıdır. Thomas, işinden arta kalan zamanında, Matrix adı verilen dijital evrende gezinmektedir. Thomas, kötü niyetli ve tehlikeli kişiler tarafından sorguya çekilir. Thomas, Trinity ve Morpheus’la tanışır. Bu sayede Thomas, sürekli araştırdığı Matrix evrenine giriş yapar. Burada Thomas, yaşadıkları dünyaya ait karanlık sırları keşfedecektir. Thomas, yani Neo, Matrix’te gezinmeye devam ettikçe, gerçek düşmanın kim olduğunu ve asıl amacının ne olduğunu kavramaya başlar. Bu sırada Neo, Trinity’ye karşı gizleyemeyeceği duygular beslemeye başlar. Morpheus ise yıllardır beklenilen, kurtarıcı kişinin Neo olduğunu düşünmektedir.'
    };
    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row text-danger border-bottom border-danger"></div>
            <div className="row">
                <HeaderTabs />
            </div>
            <div className="row justify-content-center mt-2" style={{ backgroundColor: 'rgb(40, 40, 50)', borderRadius: '26px' }}>
                <div className='row'>
                    <div className="col-9">
                        <div className='p-4'>
                            <ReactPlayer
                                url={videoUrl}
                                controls={true}
                                width="100%"
                                height="500px"
                            />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='border mt-5' style={{ height: '400px' }}>
                            <div className='m-3 text-center'>
                                <img style={{ width: '150px', height: '150px' }} src={imageUrl} alt="movie-img" />
                            </div>
                            <div>
                                <CardInfo title={name} genre={genre} productionYear={productionYear} rating={rating} />
                            </div>
                            <hr style={{ color: 'red' }} />
                            <div className='m-2 overflow-auto' style={{ color: 'white', maxHeight: '120px' }}>
                                {contentDetails}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    )
}

export default Watching