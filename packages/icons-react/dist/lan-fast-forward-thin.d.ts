import React from 'react';

export interface LanFastForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFastForwardThin: React.FC<LanFastForwardThinProps>;
export default LanFastForwardThin;
