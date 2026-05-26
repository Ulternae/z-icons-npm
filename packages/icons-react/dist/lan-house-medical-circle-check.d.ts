import React from 'react';

export interface LanHouseMedicalCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalCircleCheck: React.FC<LanHouseMedicalCircleCheckProps>;
export default LanHouseMedicalCircleCheck;
