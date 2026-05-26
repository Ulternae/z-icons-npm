import React from 'react';

export interface LanStaffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaffSolid: React.FC<LanStaffSolidProps>;
export default LanStaffSolid;
