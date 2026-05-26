import React from 'react';

export interface LanPrescriptionBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionBottle: React.FC<LanPrescriptionBottleProps>;
export default LanPrescriptionBottle;
