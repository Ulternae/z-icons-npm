import React from 'react';

export interface LanPrescriptionBottleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionBottleThin: React.FC<LanPrescriptionBottleThinProps>;
export default LanPrescriptionBottleThin;
