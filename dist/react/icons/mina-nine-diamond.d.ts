import React from 'react';

export interface MinaNineDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineDiamond: React.FC<MinaNineDiamondProps>;
export default MinaNineDiamond;
