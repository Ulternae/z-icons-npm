import React from 'react';

export interface LanStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopwatchSolid(props: LanStopwatchSolidProps): React.ReactElement;
export default LanStopwatchSolid;
