import React from 'react';

export interface LanOilWellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilWellRegular: React.FC<LanOilWellRegularProps>;
export default LanOilWellRegular;
