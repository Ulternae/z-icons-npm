import React from 'react';

export interface LanHospitalAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalAltSolid: React.FC<LanHospitalAltSolidProps>;
export default LanHospitalAltSolid;
