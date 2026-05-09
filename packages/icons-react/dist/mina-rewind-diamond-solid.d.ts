import React from 'react';

export interface MinaRewindDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindDiamondSolid: React.FC<MinaRewindDiamondSolidProps>;
export default MinaRewindDiamondSolid;
