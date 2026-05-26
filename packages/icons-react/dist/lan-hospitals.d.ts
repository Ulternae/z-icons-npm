import React from 'react';

export interface LanHospitalsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitals: React.FC<LanHospitalsProps>;
export default LanHospitals;
