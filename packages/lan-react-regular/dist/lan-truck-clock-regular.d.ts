import React from 'react';

export interface LanTruckClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckClockRegular(props: LanTruckClockRegularProps): React.ReactElement;
export default LanTruckClockRegular;
