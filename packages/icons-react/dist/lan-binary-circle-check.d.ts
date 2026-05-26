import React from 'react';

export interface LanBinaryCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryCircleCheck: React.FC<LanBinaryCircleCheckProps>;
export default LanBinaryCircleCheck;
