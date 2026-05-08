import React from 'react';

export interface MinaDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiamond: React.FC<MinaDiamondProps>;
export default MinaDiamond;
