import React from 'react';

export interface CoreShopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShopRegularDuo: React.FC<CoreShopRegularDuoProps>;
export default CoreShopRegularDuo;
