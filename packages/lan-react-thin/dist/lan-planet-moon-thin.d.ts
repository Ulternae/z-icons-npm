import React from 'react';

export interface LanPlanetMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetMoonThin(props: LanPlanetMoonThinProps): React.ReactElement;
export default LanPlanetMoonThin;
