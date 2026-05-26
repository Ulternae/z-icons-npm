import React from 'react';

export interface LanAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplaySolid: React.FC<LanAirplaySolidProps>;
export default LanAirplaySolid;
