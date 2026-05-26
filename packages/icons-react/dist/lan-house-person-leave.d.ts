import React from 'react';

export interface LanHousePersonLeaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHousePersonLeave: React.FC<LanHousePersonLeaveProps>;
export default LanHousePersonLeave;
