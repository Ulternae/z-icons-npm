import React from 'react';

export interface LanHospitalsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalsRegular: React.FC<LanHospitalsRegularProps>;
export default LanHospitalsRegular;
