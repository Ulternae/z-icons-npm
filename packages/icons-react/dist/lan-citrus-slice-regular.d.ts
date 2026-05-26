import React from 'react';

export interface LanCitrusSliceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusSliceRegular: React.FC<LanCitrusSliceRegularProps>;
export default LanCitrusSliceRegular;
