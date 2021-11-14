import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";

export const Home = () => {
    return (
        <div className="carousel-container">
            <Carousel autoPlay={true} interval={4000}>
                <div>
                    <img style={{width: '99%'}} src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AkkadBakkadLaunch/6f85b5c6-0208-4478-b1c5-68ac55d0df6a._UR3000,600_SX1500_FMwebp_.jpeg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_MaradonaS1Launch/3dc73e61-dc6f-4702-af7b-09cc269d3b32._UR3000,600_SX1500_FMwebp_.jpeg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_REKKA_HC/039238f0-b525-4543-8d96-e0df455f2a35._UR3000,600_SX1500_FMwebp_.jpeg" />
                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Sultan_final/87dc91d1-4d36-4b37-a89f-4751986f8ec7._UR3000,600_SX1500_FMwebp_.jpg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_JaiBhim_Hindi_IMDb96/f1164976-dde4-4e4e-8c71-ae95f692ac60._UR3000,600_SX1500_FMwebp_.jpeg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Kdrama_VoiceLaunch/72a0da9a-71af-4175-b192-8b5e5461cb1e._UR3000,600_SX1500_FMwebp_.jpeg" />
                </div>
            </Carousel>
        </div>
    );
}