import React from 'react';

export interface LanPlantWiltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlantWiltThin: React.FC<LanPlantWiltThinProps>;
export default LanPlantWiltThin;
