import React from 'react';

export interface MinaDotsVerticalDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalDiamond: React.FC<MinaDotsVerticalDiamondProps>;
export default MinaDotsVerticalDiamond;
