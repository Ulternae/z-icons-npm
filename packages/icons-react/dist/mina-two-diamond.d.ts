import React from 'react';

export interface MinaTwoDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoDiamond: React.FC<MinaTwoDiamondProps>;
export default MinaTwoDiamond;
