import React from 'react';

export interface MinaFiveDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveDiamondSolid: React.FC<MinaFiveDiamondSolidProps>;
export default MinaFiveDiamondSolid;
