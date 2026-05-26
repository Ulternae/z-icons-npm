import React from 'react';

export interface LanLaptopMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopMedical: React.FC<LanLaptopMedicalProps>;
export default LanLaptopMedical;
