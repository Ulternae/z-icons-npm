import React from 'react';

export interface LanSquareCurrencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCurrencySolid: React.FC<LanSquareCurrencySolidProps>;
export default LanSquareCurrencySolid;
