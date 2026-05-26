import React from 'react';

export interface LanPlantWiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlantWilt: React.FC<LanPlantWiltProps>;
export default LanPlantWilt;
