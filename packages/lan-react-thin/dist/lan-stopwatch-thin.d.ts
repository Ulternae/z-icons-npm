import React from 'react';

export interface LanStopwatchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopwatchThin(props: LanStopwatchThinProps): React.ReactElement;
export default LanStopwatchThin;
