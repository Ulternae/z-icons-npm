import React from 'react';

export interface LanBackwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardThin: React.FC<LanBackwardThinProps>;
export default LanBackwardThin;
