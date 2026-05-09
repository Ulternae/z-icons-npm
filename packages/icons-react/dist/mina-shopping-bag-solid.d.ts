import React from 'react';

export interface MinaShoppingBagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShoppingBagSolid: React.FC<MinaShoppingBagSolidProps>;
export default MinaShoppingBagSolid;
