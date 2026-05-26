import React from 'react';

export interface LanBuoyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyThin: React.FC<LanBuoyThinProps>;
export default LanBuoyThin;
