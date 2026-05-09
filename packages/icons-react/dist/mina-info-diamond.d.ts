import React from 'react';

export interface MinaInfoDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoDiamond: React.FC<MinaInfoDiamondProps>;
export default MinaInfoDiamond;
