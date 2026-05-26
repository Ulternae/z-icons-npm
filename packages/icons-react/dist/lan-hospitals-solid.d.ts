import React from 'react';

export interface LanHospitalsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalsSolid: React.FC<LanHospitalsSolidProps>;
export default LanHospitalsSolid;
