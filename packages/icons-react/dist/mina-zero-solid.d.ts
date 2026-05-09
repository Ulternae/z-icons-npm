import React from 'react';

export interface MinaZeroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroSolid: React.FC<MinaZeroSolidProps>;
export default MinaZeroSolid;
