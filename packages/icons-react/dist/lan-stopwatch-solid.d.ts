import React from 'react';

export interface LanStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatchSolid: React.FC<LanStopwatchSolidProps>;
export default LanStopwatchSolid;
