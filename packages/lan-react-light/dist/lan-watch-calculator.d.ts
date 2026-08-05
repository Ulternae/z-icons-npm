import React from 'react';

export interface LanWatchCalculatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchCalculator(props: LanWatchCalculatorProps): React.ReactElement;
export default LanWatchCalculator;
