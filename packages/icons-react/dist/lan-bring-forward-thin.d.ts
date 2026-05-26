import React from 'react';

export interface LanBringForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringForwardThin: React.FC<LanBringForwardThinProps>;
export default LanBringForwardThin;
