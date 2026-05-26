import React from 'react';

export interface LanCircleCurrencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCurrencySolid: React.FC<LanCircleCurrencySolidProps>;
export default LanCircleCurrencySolid;
