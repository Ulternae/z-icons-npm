import React from 'react';

export interface LanPlanetMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetMoonRegular: React.FC<LanPlanetMoonRegularProps>;
export default LanPlanetMoonRegular;
