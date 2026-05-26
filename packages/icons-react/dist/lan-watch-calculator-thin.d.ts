import React from 'react';

export interface LanWatchCalculatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchCalculatorThin: React.FC<LanWatchCalculatorThinProps>;
export default LanWatchCalculatorThin;
