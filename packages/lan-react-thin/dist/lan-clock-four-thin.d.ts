import React from 'react';

export interface LanClockFourThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFourThin(props: LanClockFourThinProps): React.ReactElement;
export default LanClockFourThin;
