import React from 'react';

export interface MinaDotsDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsDiamond: React.FC<MinaDotsDiamondProps>;
export default MinaDotsDiamond;
