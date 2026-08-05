import React from 'react';

export interface LanPlanetRingedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetRingedThin(props: LanPlanetRingedThinProps): React.ReactElement;
export default LanPlanetRingedThin;
