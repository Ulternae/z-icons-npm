import React from 'react';

export interface LanBrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainThin: React.FC<LanBrainThinProps>;
export default LanBrainThin;
