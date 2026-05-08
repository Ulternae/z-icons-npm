import React from 'react';

export interface MinaDollarDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDollarDiamond: React.FC<MinaDollarDiamondProps>;
export default MinaDollarDiamond;
