import Button from 'elements/Button';
import React from 'react';
import heroImage from 'assets/image/video.png';
import './Hero.scss';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-body ">
        <div className="mx-24 my-12 flex  flex-row items-center">
          <div className="hero-content basis-1/2">
            <h1 className="font-bold ">
              <span className="text-underline small">Eat</span> What You Cook
              With Us, <span className="text-underline large">Together!</span>
            </h1>
            <p className="mb-10">
              When you eat something that cooked by yourself, the happiness is
              priceless.
            </p>
            <Button className="button-cta " href="/" type="link">
              Decide a Menu
            </Button>
          </div>
          <div className="hero-image basis-1/2">
            <img src={heroImage} alt="heroimage" />
          </div>
        </div>
      </div>
    </section>
  );
}
