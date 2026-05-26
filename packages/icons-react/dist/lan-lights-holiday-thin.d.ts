import React from 'react';

export interface LanLightsHolidayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightsHolidayThin: React.FC<LanLightsHolidayThinProps>;
export default LanLightsHolidayThin;
