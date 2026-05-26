import React from 'react';

export interface LanSatelliteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSatellite: React.FC<LanSatelliteProps>;
export default LanSatellite;
