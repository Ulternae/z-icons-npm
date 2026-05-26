import React from 'react';

export interface LanSnowBlowingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowBlowingRegular: React.FC<LanSnowBlowingRegularProps>;
export default LanSnowBlowingRegular;
