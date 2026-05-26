import React from 'react';

export interface LanSunglassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunglassesRegular: React.FC<LanSunglassesRegularProps>;
export default LanSunglassesRegular;
