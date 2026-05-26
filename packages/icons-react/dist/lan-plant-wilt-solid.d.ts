import React from 'react';

export interface LanPlantWiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlantWiltSolid: React.FC<LanPlantWiltSolidProps>;
export default LanPlantWiltSolid;
