import React from 'react';

export interface LanSunPlantWiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunPlantWilt: React.FC<LanSunPlantWiltProps>;
export default LanSunPlantWilt;
