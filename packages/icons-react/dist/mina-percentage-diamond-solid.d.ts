import React from 'react';

export interface MinaPercentageDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageDiamondSolid: React.FC<MinaPercentageDiamondSolidProps>;
export default MinaPercentageDiamondSolid;
