import React from 'react';

export interface LanWatchCalculatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchCalculatorThin(props: LanWatchCalculatorThinProps): React.ReactElement;
export default LanWatchCalculatorThin;
