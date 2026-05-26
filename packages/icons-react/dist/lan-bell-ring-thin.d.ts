import React from 'react';

export interface LanBellRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellRingThin: React.FC<LanBellRingThinProps>;
export default LanBellRingThin;
