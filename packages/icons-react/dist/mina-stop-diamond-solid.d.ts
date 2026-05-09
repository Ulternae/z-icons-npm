import React from 'react';

export interface MinaStopDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopDiamondSolid: React.FC<MinaStopDiamondSolidProps>;
export default MinaStopDiamondSolid;
