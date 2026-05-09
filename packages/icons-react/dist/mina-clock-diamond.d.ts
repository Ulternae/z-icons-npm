import React from 'react';

export interface MinaClockDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockDiamond: React.FC<MinaClockDiamondProps>;
export default MinaClockDiamond;
