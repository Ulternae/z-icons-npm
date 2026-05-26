import React from 'react';

export interface LanWatchSmartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchSmart: React.FC<LanWatchSmartProps>;
export default LanWatchSmart;
