import React from 'react';

export interface LanLampStreetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampStreetRegular: React.FC<LanLampStreetRegularProps>;
export default LanLampStreetRegular;
