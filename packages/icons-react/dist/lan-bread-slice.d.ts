import React from 'react';

export interface LanBreadSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSlice: React.FC<LanBreadSliceProps>;
export default LanBreadSlice;
