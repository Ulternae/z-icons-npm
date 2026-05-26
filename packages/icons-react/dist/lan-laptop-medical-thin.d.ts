import React from 'react';

export interface LanLaptopMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopMedicalThin: React.FC<LanLaptopMedicalThinProps>;
export default LanLaptopMedicalThin;
