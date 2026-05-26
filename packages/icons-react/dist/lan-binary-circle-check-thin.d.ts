import React from 'react';

export interface LanBinaryCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryCircleCheckThin: React.FC<LanBinaryCircleCheckThinProps>;
export default LanBinaryCircleCheckThin;
