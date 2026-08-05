import React from 'react';

export interface LanHourglassClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassClock(props: LanHourglassClockProps): React.ReactElement;
export default LanHourglassClock;
