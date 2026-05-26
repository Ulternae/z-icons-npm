import React from 'react';

export interface LanStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatch: React.FC<LanStopwatchProps>;
export default LanStopwatch;
