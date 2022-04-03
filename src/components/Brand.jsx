import React from 'react';
import Button from 'elements/Button';
import brand from 'assets/image/brand.svg';

export default function Brand() {
  return (
    <Button
      className="brand-icon-wrapper flex items-center"
      href="/"
      type="link"
    >
      <img src={brand} alt="Brand_image" className="brand-icon block mr-3 " />
      <span>Foodyar</span>
    </Button>
  );
}
