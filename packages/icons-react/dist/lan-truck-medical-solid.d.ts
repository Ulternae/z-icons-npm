import React from 'react';

export interface LanTruckMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMedicalSolid: React.FC<LanTruckMedicalSolidProps>;
export default LanTruckMedicalSolid;
