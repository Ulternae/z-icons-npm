import React from 'react';

export interface LanOilWellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilWellThin: React.FC<LanOilWellThinProps>;
export default LanOilWellThin;
