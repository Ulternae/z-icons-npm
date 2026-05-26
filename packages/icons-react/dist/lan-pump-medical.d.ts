import React from 'react';

export interface LanPumpMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpMedical: React.FC<LanPumpMedicalProps>;
export default LanPumpMedical;
