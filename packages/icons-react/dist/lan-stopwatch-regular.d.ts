import React from 'react';

export interface LanStopwatchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatchRegular: React.FC<LanStopwatchRegularProps>;
export default LanStopwatchRegular;
