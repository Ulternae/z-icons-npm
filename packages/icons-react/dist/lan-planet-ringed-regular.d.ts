import React from 'react';

export interface LanPlanetRingedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetRingedRegular: React.FC<LanPlanetRingedRegularProps>;
export default LanPlanetRingedRegular;
