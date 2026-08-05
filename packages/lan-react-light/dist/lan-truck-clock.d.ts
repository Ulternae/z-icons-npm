import React from 'react';

export interface LanTruckClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckClock(props: LanTruckClockProps): React.ReactElement;
export default LanTruckClock;
