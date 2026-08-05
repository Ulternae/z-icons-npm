import React from 'react';

export interface LanPlanetMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetMoonRegular(props: LanPlanetMoonRegularProps): React.ReactElement;
export default LanPlanetMoonRegular;
