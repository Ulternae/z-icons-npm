import React from 'react';

export interface LanStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopwatch(props: LanStopwatchProps): React.ReactElement;
export default LanStopwatch;
