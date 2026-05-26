import React from 'react';

export interface LanSunPlantWiltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunPlantWiltThin: React.FC<LanSunPlantWiltThinProps>;
export default LanSunPlantWiltThin;
