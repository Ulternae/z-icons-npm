import React from 'react';

export interface MinaZeroDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroDiamond: React.FC<MinaZeroDiamondProps>;
export default MinaZeroDiamond;
