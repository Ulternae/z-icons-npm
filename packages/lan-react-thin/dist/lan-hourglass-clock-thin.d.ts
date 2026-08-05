import React from 'react';

export interface LanHourglassClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassClockThin(props: LanHourglassClockThinProps): React.ReactElement;
export default LanHourglassClockThin;
