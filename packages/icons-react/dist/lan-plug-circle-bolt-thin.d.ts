import React from 'react';

export interface LanPlugCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleBoltThin: React.FC<LanPlugCircleBoltThinProps>;
export default LanPlugCircleBoltThin;
