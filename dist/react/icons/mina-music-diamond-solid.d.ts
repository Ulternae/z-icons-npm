import React from 'react';

export interface MinaMusicDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicDiamondSolid: React.FC<MinaMusicDiamondSolidProps>;
export default MinaMusicDiamondSolid;
