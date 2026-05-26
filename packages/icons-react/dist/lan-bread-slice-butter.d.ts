import React from 'react';

export interface LanBreadSliceButterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceButter: React.FC<LanBreadSliceButterProps>;
export default LanBreadSliceButter;
