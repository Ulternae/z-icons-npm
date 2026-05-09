import React from 'react';

export interface MinaDangerDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerDiamondSolid: React.FC<MinaDangerDiamondSolidProps>;
export default MinaDangerDiamondSolid;
