import React from 'react';

export interface LanClockSixThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSixThin(props: LanClockSixThinProps): React.ReactElement;
export default LanClockSixThin;
