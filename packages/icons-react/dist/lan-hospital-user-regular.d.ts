import React from 'react';

export interface LanHospitalUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalUserRegular: React.FC<LanHospitalUserRegularProps>;
export default LanHospitalUserRegular;
