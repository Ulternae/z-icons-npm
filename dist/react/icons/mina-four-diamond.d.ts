import React from 'react';

export interface MinaFourDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourDiamond: React.FC<MinaFourDiamondProps>;
export default MinaFourDiamond;
