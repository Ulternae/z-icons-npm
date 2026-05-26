import React from 'react';

export interface LanPumpMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpMedicalSolid: React.FC<LanPumpMedicalSolidProps>;
export default LanPumpMedicalSolid;
