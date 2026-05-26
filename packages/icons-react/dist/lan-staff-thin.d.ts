import React from 'react';

export interface LanStaffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaffThin: React.FC<LanStaffThinProps>;
export default LanStaffThin;
