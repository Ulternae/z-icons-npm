import React from 'react';

export interface LanClockFiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveThin(props: LanClockFiveThinProps): React.ReactElement;
export default LanClockFiveThin;
