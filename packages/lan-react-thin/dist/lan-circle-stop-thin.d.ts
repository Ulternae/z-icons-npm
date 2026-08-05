import React from 'react';

export interface LanCircleStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStopThin(props: LanCircleStopThinProps): React.ReactElement;
export default LanCircleStopThin;
