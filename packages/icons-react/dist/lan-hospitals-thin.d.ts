import React from 'react';

export interface LanHospitalsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHospitalsThin: React.FC<LanHospitalsThinProps>;
export default LanHospitalsThin;
