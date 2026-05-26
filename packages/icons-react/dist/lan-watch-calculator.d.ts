import React from 'react';

export interface LanWatchCalculatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchCalculator: React.FC<LanWatchCalculatorProps>;
export default LanWatchCalculator;
