import React from 'react';

export interface LanFaceSunglassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSunglassesRegular: React.FC<LanFaceSunglassesRegularProps>;
export default LanFaceSunglassesRegular;
