import React from 'react';

export interface LanPlanetRingedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlanetRingedRegular(props: LanPlanetRingedRegularProps): React.ReactElement;
export default LanPlanetRingedRegular;
