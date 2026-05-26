import React from 'react';

export interface LanLightsHolidayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightsHoliday: React.FC<LanLightsHolidayProps>;
export default LanLightsHoliday;
