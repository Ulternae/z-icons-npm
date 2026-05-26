import React from 'react';

export interface LanTimerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimer: React.FC<LanTimerProps>;
export default LanTimer;
