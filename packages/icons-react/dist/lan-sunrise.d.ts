import React from 'react';

export interface LanSunriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunrise: React.FC<LanSunriseProps>;
export default LanSunrise;
