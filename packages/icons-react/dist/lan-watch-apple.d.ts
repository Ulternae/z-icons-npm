import React from 'react';

export interface LanWatchAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchApple: React.FC<LanWatchAppleProps>;
export default LanWatchApple;
