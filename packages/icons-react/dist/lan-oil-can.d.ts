import React from 'react';

export interface LanOilCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCan: React.FC<LanOilCanProps>;
export default LanOilCan;
