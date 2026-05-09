import React from 'react';

export interface MinaHashDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashDiamond: React.FC<MinaHashDiamondProps>;
export default MinaHashDiamond;
