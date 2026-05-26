import React from 'react';

export interface LanOilCanDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanDrip: React.FC<LanOilCanDripProps>;
export default LanOilCanDrip;
