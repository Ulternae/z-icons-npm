import React from 'react';

export interface MinaYenDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenDiamondSolid: React.FC<MinaYenDiamondSolidProps>;
export default MinaYenDiamondSolid;
