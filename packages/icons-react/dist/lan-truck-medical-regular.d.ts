import React from 'react';

export interface LanTruckMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMedicalRegular: React.FC<LanTruckMedicalRegularProps>;
export default LanTruckMedicalRegular;
