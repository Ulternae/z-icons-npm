import React from 'react';

export interface LanWatchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchThin: React.FC<LanWatchThinProps>;
export default LanWatchThin;
