import React from 'react';

export interface LanLaptopMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLaptopMedicalSolid: React.FC<LanLaptopMedicalSolidProps>;
export default LanLaptopMedicalSolid;
