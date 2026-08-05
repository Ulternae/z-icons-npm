import React from 'react';

export interface LanCircleUserClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserClock(props: LanCircleUserClockProps): React.ReactElement;
export default LanCircleUserClock;
