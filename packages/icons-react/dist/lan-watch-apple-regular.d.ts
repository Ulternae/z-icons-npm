import React from 'react';

export interface LanWatchAppleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchAppleRegular: React.FC<LanWatchAppleRegularProps>;
export default LanWatchAppleRegular;
