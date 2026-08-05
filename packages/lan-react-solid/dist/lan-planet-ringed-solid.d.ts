import React from 'react';

export interface LanPlanetRingedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetRingedSolid(props: LanPlanetRingedSolidProps): React.ReactElement;
export default LanPlanetRingedSolid;
