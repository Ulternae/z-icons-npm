import React from 'react';

export interface LanPlanetRingedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetRinged: React.FC<LanPlanetRingedProps>;
export default LanPlanetRinged;
