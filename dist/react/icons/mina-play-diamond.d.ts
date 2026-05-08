import React from 'react';

export interface MinaPlayDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayDiamond: React.FC<MinaPlayDiamondProps>;
export default MinaPlayDiamond;
