import React from 'react';

export interface MinaPauseDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseDiamondSolid: React.FC<MinaPauseDiamondSolidProps>;
export default MinaPauseDiamondSolid;
