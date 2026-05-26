import React from 'react';

export interface LanPrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescription: React.FC<LanPrescriptionProps>;
export default LanPrescription;
