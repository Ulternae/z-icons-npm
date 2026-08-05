import React from 'react';

export interface LanClockEightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockEightThin(props: LanClockEightThinProps): React.ReactElement;
export default LanClockEightThin;
