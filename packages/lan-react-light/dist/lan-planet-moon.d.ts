import React from 'react';

export interface LanPlanetMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetMoon(props: LanPlanetMoonProps): React.ReactElement;
export default LanPlanetMoon;
