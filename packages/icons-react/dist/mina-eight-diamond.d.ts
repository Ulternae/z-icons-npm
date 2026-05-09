import React from 'react';

export interface MinaEightDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightDiamond: React.FC<MinaEightDiamondProps>;
export default MinaEightDiamond;
