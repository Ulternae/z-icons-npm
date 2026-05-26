import React from 'react';

export interface LanHospitalUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalUserThin: React.FC<LanHospitalUserThinProps>;
export default LanHospitalUserThin;
