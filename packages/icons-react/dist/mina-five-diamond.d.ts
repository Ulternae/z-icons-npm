import React from 'react';

export interface MinaFiveDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveDiamond: React.FC<MinaFiveDiamondProps>;
export default MinaFiveDiamond;
