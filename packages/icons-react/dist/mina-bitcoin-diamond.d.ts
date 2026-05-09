import React from 'react';

export interface MinaBitcoinDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinDiamond: React.FC<MinaBitcoinDiamondProps>;
export default MinaBitcoinDiamond;
