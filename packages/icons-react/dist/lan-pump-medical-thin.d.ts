import React from 'react';

export interface LanPumpMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpMedicalThin: React.FC<LanPumpMedicalThinProps>;
export default LanPumpMedicalThin;
