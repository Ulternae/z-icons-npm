import React from 'react';

export interface MinaPlayDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayDiamondSolid: React.FC<MinaPlayDiamondSolidProps>;
export default MinaPlayDiamondSolid;
