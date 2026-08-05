import React from 'react';

export interface LanTruckClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckClockThin(props: LanTruckClockThinProps): React.ReactElement;
export default LanTruckClockThin;
