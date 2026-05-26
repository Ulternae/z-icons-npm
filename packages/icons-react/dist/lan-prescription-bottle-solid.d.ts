import React from 'react';

export interface LanPrescriptionBottleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionBottleSolid: React.FC<LanPrescriptionBottleSolidProps>;
export default LanPrescriptionBottleSolid;
