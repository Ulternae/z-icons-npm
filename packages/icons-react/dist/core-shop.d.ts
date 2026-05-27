import React from 'react';

export interface CoreShopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShop: React.FC<CoreShopProps>;
export default CoreShop;
