import React from 'react';

export interface LanWatchCalculatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatchCalculatorRegular: React.FC<LanWatchCalculatorRegularProps>;
export default LanWatchCalculatorRegular;
