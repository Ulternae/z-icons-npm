import React from 'react';

export interface LanTimerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimerThin: React.FC<LanTimerThinProps>;
export default LanTimerThin;
