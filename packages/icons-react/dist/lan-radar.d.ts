import React from 'react';

export interface LanRadarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadar: React.FC<LanRadarProps>;
export default LanRadar;
