import React from 'react';

export interface LanLampStreetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampStreetSolid: React.FC<LanLampStreetSolidProps>;
export default LanLampStreetSolid;
