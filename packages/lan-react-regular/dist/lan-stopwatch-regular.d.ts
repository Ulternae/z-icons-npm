import React from 'react';

export interface LanStopwatchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopwatchRegular(props: LanStopwatchRegularProps): React.ReactElement;
export default LanStopwatchRegular;
