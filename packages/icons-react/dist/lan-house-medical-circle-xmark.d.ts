import React from 'react';

export interface LanHouseMedicalCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalCircleXmark: React.FC<LanHouseMedicalCircleXmarkProps>;
export default LanHouseMedicalCircleXmark;
