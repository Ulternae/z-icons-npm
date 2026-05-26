import React from 'react';

export interface LanOilCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanThin: React.FC<LanOilCanThinProps>;
export default LanOilCanThin;
