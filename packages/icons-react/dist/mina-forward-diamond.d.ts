import React from 'react';

export interface MinaForwardDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardDiamond: React.FC<MinaForwardDiamondProps>;
export default MinaForwardDiamond;
