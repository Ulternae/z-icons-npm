import React from 'react';

export interface LanUsersMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersMedicalSolid: React.FC<LanUsersMedicalSolidProps>;
export default LanUsersMedicalSolid;
