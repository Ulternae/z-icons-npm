import React from 'react';

export interface LanPlantWiltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlantWiltRegular: React.FC<LanPlantWiltRegularProps>;
export default LanPlantWiltRegular;
