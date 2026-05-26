import React from 'react';

export interface LanCitrusSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusSlice: React.FC<LanCitrusSliceProps>;
export default LanCitrusSlice;
