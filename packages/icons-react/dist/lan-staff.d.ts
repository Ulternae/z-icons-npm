import React from 'react';

export interface LanStaffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaff: React.FC<LanStaffProps>;
export default LanStaff;
