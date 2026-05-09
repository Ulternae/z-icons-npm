import React from 'react';

export interface MinaBitcoinDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinDiamondSolid: React.FC<MinaBitcoinDiamondSolidProps>;
export default MinaBitcoinDiamondSolid;
