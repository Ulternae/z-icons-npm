import React from 'react';

export interface MinaNineDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineDiamondSolid: React.FC<MinaNineDiamondSolidProps>;
export default MinaNineDiamondSolid;
