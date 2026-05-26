import React from 'react';

export interface LanWatchSmartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchSmartThin: React.FC<LanWatchSmartThinProps>;
export default LanWatchSmartThin;
