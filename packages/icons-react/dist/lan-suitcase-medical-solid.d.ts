import React from 'react';

export interface LanSuitcaseMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseMedicalSolid: React.FC<LanSuitcaseMedicalSolidProps>;
export default LanSuitcaseMedicalSolid;
