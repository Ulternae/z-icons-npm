import React from 'react';

export interface LanPrescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionRegular: React.FC<LanPrescriptionRegularProps>;
export default LanPrescriptionRegular;
