import React from 'react';

export interface LanBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstThin: React.FC<LanBurstThinProps>;
export default LanBurstThin;
