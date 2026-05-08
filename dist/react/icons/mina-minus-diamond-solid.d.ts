import React from 'react';

export interface MinaMinusDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusDiamondSolid: React.FC<MinaMinusDiamondSolidProps>;
export default MinaMinusDiamondSolid;
