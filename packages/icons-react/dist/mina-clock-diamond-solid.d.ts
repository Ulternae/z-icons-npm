import React from 'react';

export interface MinaClockDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockDiamondSolid: React.FC<MinaClockDiamondSolidProps>;
export default MinaClockDiamondSolid;
