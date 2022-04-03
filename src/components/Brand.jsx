import React from 'react';
import Button from 'elements/Button';
import brand from 'assets/image/brand.svg';

export default function Brand() {
  return (
    <Button className="brand-icon" href="/" type="link">
      <span>
        <img src={brand} alt="Brand_image" />
        <span>Foodyar</span>
      </span>
    </Button>
  );
}
