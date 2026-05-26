import React from 'react';

export interface LanPrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionSolid: React.FC<LanPrescriptionSolidProps>;
export default LanPrescriptionSolid;
