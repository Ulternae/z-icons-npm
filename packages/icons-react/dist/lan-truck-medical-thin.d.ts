import React from 'react';

export interface LanTruckMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMedicalThin: React.FC<LanTruckMedicalThinProps>;
export default LanTruckMedicalThin;
