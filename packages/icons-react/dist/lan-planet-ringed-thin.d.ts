import React from 'react';

export interface LanPlanetRingedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlanetRingedThin: React.FC<LanPlanetRingedThinProps>;
export default LanPlanetRingedThin;
