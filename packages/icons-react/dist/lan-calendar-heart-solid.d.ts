import React from 'react';

export interface LanCalendarHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarHeartSolid: React.FC<LanCalendarHeartSolidProps>;
export default LanCalendarHeartSolid;
