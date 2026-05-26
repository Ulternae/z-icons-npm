import React from 'react';

export interface LanPlateWheatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlateWheatThin: React.FC<LanPlateWheatThinProps>;
export default LanPlateWheatThin;
