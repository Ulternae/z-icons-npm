import React from 'react';

export interface LanPlanetMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetMoonSolid(props: LanPlanetMoonSolidProps): React.ReactElement;
export default LanPlanetMoonSolid;
