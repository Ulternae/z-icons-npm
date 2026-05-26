import React from 'react';

export interface LanWatermelonSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatermelonSlice: React.FC<LanWatermelonSliceProps>;
export default LanWatermelonSlice;
