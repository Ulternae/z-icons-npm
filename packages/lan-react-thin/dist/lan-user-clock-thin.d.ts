import React from 'react';

export interface LanUserClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserClockThin(props: LanUserClockThinProps): React.ReactElement;
export default LanUserClockThin;
