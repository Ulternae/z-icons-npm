import React from 'react';

export interface NeoCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCartShopping: React.FC<NeoCartShoppingProps>;
export default NeoCartShopping;
