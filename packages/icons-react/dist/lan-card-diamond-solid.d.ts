import React from 'react';

export interface LanCardDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardDiamondSolid: React.FC<LanCardDiamondSolidProps>;
export default LanCardDiamondSolid;
