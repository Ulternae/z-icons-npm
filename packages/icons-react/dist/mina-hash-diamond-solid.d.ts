import React from 'react';

export interface MinaHashDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashDiamondSolid: React.FC<MinaHashDiamondSolidProps>;
export default MinaHashDiamondSolid;
