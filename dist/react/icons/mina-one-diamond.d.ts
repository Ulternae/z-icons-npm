import React from 'react';

export interface MinaOneDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneDiamond: React.FC<MinaOneDiamondProps>;
export default MinaOneDiamond;
