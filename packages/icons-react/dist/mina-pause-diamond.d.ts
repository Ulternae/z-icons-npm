import React from 'react';

export interface MinaPauseDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseDiamond: React.FC<MinaPauseDiamondProps>;
export default MinaPauseDiamond;
