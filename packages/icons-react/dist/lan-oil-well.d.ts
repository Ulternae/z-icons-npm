import React from 'react';

export interface LanOilWellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilWell: React.FC<LanOilWellProps>;
export default LanOilWell;
