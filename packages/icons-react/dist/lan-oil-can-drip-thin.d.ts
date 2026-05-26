import React from 'react';

export interface LanOilCanDripThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanDripThin: React.FC<LanOilCanDripThinProps>;
export default LanOilCanDripThin;
