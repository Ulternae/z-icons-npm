import React from 'react';

export interface LanBurstNewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstNewThin: React.FC<LanBurstNewThinProps>;
export default LanBurstNewThin;
