import React from 'react';

export interface LanClockTwoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwoThin(props: LanClockTwoThinProps): React.ReactElement;
export default LanClockTwoThin;
