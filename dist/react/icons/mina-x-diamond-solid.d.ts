import React from 'react';

export interface MinaXDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXDiamondSolid: React.FC<MinaXDiamondSolidProps>;
export default MinaXDiamondSolid;
