import React from 'react';

export interface LanPlanetRingedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetRinged(props: LanPlanetRingedProps): React.ReactElement;
export default LanPlanetRinged;
