import React from 'react';

export interface LanSolarSystemThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarSystemThin: React.FC<LanSolarSystemThinProps>;
export default LanSolarSystemThin;
