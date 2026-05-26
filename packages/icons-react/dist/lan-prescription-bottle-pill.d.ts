import React from 'react';

export interface LanPrescriptionBottlePillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionBottlePill: React.FC<LanPrescriptionBottlePillProps>;
export default LanPrescriptionBottlePill;
