import React from 'react';

export interface MinaDangerDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerDiamond: React.FC<MinaDangerDiamondProps>;
export default MinaDangerDiamond;
