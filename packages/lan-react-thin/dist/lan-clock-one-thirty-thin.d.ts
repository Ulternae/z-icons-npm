import React from 'react';

export interface LanClockOneThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneThirtyThin(props: LanClockOneThirtyThinProps): React.ReactElement;
export default LanClockOneThirtyThin;
