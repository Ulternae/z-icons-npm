import React from 'react';

export interface LanUserClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserClock(props: LanUserClockProps): React.ReactElement;
export default LanUserClock;
