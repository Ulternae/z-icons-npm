import React from 'react';

export interface LanTruckMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMedical: React.FC<LanTruckMedicalProps>;
export default LanTruckMedical;
