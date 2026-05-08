import React from 'react';

export interface MinaTwoDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoDiamondSolid: React.FC<MinaTwoDiamondSolidProps>;
export default MinaTwoDiamondSolid;
