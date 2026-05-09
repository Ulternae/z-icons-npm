import React from 'react';

export interface MinaOneDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneDiamondSolid: React.FC<MinaOneDiamondSolidProps>;
export default MinaOneDiamondSolid;
