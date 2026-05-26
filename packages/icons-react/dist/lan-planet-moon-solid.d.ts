import React from 'react';

export interface LanPlanetMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetMoonSolid: React.FC<LanPlanetMoonSolidProps>;
export default LanPlanetMoonSolid;
