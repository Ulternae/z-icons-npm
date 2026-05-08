import React from 'react';

export interface MinaZeroDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroDiamondSolid: React.FC<MinaZeroDiamondSolidProps>;
export default MinaZeroDiamondSolid;
