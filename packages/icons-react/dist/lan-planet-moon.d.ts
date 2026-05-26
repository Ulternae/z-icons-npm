import React from 'react';

export interface LanPlanetMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetMoon: React.FC<LanPlanetMoonProps>;
export default LanPlanetMoon;
