import React from 'react';

export interface LanBasketShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShoppingSolid: React.FC<LanBasketShoppingSolidProps>;
export default LanBasketShoppingSolid;
