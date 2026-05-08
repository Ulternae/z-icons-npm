import React from 'react';

export interface MinaAsteriskDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskDiamondSolid: React.FC<MinaAsteriskDiamondSolidProps>;
export default MinaAsteriskDiamondSolid;
