import React from 'react';

export interface LanClockFiveThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveThirtyThin(props: LanClockFiveThirtyThinProps): React.ReactElement;
export default LanClockFiveThirtyThin;
