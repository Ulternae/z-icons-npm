import React from 'react';

export interface LanPrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionThin: React.FC<LanPrescriptionThinProps>;
export default LanPrescriptionThin;
