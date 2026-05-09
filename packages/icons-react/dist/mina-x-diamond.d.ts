import React from 'react';

export interface MinaXDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXDiamond: React.FC<MinaXDiamondProps>;
export default MinaXDiamond;
