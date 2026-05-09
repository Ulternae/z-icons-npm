import React from 'react';

export interface MinaDotsVerticalDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalDiamondSolid: React.FC<MinaDotsVerticalDiamondSolidProps>;
export default MinaDotsVerticalDiamondSolid;
