import React from 'react';

export interface LanLightsHolidayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightsHolidayRegular: React.FC<LanLightsHolidayRegularProps>;
export default LanLightsHolidayRegular;
