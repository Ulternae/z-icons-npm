import React from 'react';

export interface LanOilCanDripRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanDripRegular: React.FC<LanOilCanDripRegularProps>;
export default LanOilCanDripRegular;
