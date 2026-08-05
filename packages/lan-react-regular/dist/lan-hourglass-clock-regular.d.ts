import React from 'react';

export interface LanHourglassClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHourglassClockRegular(props: LanHourglassClockRegularProps): React.ReactElement;
export default LanHourglassClockRegular;
