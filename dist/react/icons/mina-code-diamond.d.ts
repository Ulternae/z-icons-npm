import React from 'react';

export interface MinaCodeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeDiamond: React.FC<MinaCodeDiamondProps>;
export default MinaCodeDiamond;
