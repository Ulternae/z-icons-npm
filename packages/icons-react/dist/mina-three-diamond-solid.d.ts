import React from 'react';

export interface MinaThreeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeDiamondSolid: React.FC<MinaThreeDiamondSolidProps>;
export default MinaThreeDiamondSolid;
