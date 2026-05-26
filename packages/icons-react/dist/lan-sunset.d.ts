import React from 'react';

export interface LanSunsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunset: React.FC<LanSunsetProps>;
export default LanSunset;
