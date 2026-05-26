import React from 'react';

export interface LanStopwatchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatchThin: React.FC<LanStopwatchThinProps>;
export default LanStopwatchThin;
