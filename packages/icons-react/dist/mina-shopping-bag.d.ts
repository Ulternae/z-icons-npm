import React from 'react';

export interface MinaShoppingBagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShoppingBag: React.FC<MinaShoppingBagProps>;
export default MinaShoppingBag;
