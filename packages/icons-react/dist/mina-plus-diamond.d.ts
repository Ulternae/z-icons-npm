import React from 'react';

export interface MinaPlusDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusDiamond: React.FC<MinaPlusDiamondProps>;
export default MinaPlusDiamond;
