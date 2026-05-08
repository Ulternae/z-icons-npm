import React from 'react';

export interface MinaSevenDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenDiamond: React.FC<MinaSevenDiamondProps>;
export default MinaSevenDiamond;
