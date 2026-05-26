import React from 'react';

export interface LanHospitalUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalUserSolid: React.FC<LanHospitalUserSolidProps>;
export default LanHospitalUserSolid;
