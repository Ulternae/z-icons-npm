import React from 'react';

export interface MinaCodeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeDiamondSolid: React.FC<MinaCodeDiamondSolidProps>;
export default MinaCodeDiamondSolid;
