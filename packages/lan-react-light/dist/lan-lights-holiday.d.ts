import React from 'react';

export interface LanLightsHolidayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightsHoliday(props: LanLightsHolidayProps): React.ReactElement;
export default LanLightsHoliday;
