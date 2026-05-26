import React from 'react';

export interface LanHospitalAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalAltThin: React.FC<LanHospitalAltThinProps>;
export default LanHospitalAltThin;
