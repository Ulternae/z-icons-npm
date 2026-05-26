import React from 'react';

export interface LanBellRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellRing: React.FC<LanBellRingProps>;
export default LanBellRing;
