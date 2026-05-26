import React from 'react';

export interface LanHospitalAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalAlt: React.FC<LanHospitalAltProps>;
export default LanHospitalAlt;
