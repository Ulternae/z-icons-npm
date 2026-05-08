import React from 'react';

export interface MinaEightDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightDiamondSolid: React.FC<MinaEightDiamondSolidProps>;
export default MinaEightDiamondSolid;
