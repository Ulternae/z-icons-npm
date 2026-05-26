import React from 'react';

export interface LanSunPlantWiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunPlantWiltSolid: React.FC<LanSunPlantWiltSolidProps>;
export default LanSunPlantWiltSolid;
