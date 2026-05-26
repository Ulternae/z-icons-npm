import React from 'react';

export interface LanBringForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringForward: React.FC<LanBringForwardProps>;
export default LanBringForward;
