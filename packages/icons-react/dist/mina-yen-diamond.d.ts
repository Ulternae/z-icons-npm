import React from 'react';

export interface MinaYenDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenDiamond: React.FC<MinaYenDiamondProps>;
export default MinaYenDiamond;
