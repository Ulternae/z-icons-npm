import React from 'react';

export interface MinaInfoDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoDiamondSolid: React.FC<MinaInfoDiamondSolidProps>;
export default MinaInfoDiamondSolid;
