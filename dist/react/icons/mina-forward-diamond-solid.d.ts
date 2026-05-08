import React from 'react';

export interface MinaForwardDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardDiamondSolid: React.FC<MinaForwardDiamondSolidProps>;
export default MinaForwardDiamondSolid;
