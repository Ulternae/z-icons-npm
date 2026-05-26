import React from 'react';

export interface LanHouseDayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseDay: React.FC<LanHouseDayProps>;
export default LanHouseDay;
