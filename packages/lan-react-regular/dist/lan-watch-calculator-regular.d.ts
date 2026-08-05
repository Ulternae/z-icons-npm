import React from 'react';

export interface LanWatchCalculatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchCalculatorRegular(props: LanWatchCalculatorRegularProps): React.ReactElement;
export default LanWatchCalculatorRegular;
