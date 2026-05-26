import React from 'react';

export interface LanPumpMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpMedicalRegular: React.FC<LanPumpMedicalRegularProps>;
export default LanPumpMedicalRegular;
