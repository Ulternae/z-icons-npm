import React from 'react';

export interface LanHourglassClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassClockRegular: React.FC<LanHourglassClockRegularProps>;
export default LanHourglassClockRegular;
