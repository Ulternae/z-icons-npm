import React from 'react';

export interface LanLampStreetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampStreetThin: React.FC<LanLampStreetThinProps>;
export default LanLampStreetThin;
