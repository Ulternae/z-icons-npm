import React from 'react';

export interface LanLampStreetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampStreet: React.FC<LanLampStreetProps>;
export default LanLampStreet;
