import React from 'react';

export interface LanHouseMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalSolid: React.FC<LanHouseMedicalSolidProps>;
export default LanHouseMedicalSolid;
