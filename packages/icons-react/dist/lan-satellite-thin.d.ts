import React from 'react';

export interface LanSatelliteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatelliteThin: React.FC<LanSatelliteThinProps>;
export default LanSatelliteThin;
