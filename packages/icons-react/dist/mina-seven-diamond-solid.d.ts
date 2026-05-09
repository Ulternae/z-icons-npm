import React from 'react';

export interface MinaSevenDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenDiamondSolid: React.FC<MinaSevenDiamondSolidProps>;
export default MinaSevenDiamondSolid;
