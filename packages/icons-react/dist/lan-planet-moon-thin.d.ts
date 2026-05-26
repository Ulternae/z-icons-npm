import React from 'react';

export interface LanPlanetMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetMoonThin: React.FC<LanPlanetMoonThinProps>;
export default LanPlanetMoonThin;
