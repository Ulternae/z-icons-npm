import React from 'react';

export interface LanBreadSliceButterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceButterThin: React.FC<LanBreadSliceButterThinProps>;
export default LanBreadSliceButterThin;
