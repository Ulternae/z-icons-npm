import React from 'react';

export interface MinaCheckDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckDiamond: React.FC<MinaCheckDiamondProps>;
export default MinaCheckDiamond;
