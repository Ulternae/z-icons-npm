import React from 'react';

export interface LanHospitalUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalUser: React.FC<LanHospitalUserProps>;
export default LanHospitalUser;
