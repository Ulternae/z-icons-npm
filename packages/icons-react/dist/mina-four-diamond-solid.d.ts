import React from 'react';

export interface MinaFourDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourDiamondSolid: React.FC<MinaFourDiamondSolidProps>;
export default MinaFourDiamondSolid;
