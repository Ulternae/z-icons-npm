import React from 'react';

export interface LanOilCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanRegular: React.FC<LanOilCanRegularProps>;
export default LanOilCanRegular;
