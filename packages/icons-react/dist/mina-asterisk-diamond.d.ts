import React from 'react';

export interface MinaAsteriskDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskDiamond: React.FC<MinaAsteriskDiamondProps>;
export default MinaAsteriskDiamond;
