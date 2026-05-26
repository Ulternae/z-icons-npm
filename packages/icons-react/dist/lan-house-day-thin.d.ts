import React from 'react';

export interface LanHouseDayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseDayThin: React.FC<LanHouseDayThinProps>;
export default LanHouseDayThin;
