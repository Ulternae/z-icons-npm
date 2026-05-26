import React from 'react';

export interface LanPrescriptionBottleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrescriptionBottleRegular: React.FC<LanPrescriptionBottleRegularProps>;
export default LanPrescriptionBottleRegular;
