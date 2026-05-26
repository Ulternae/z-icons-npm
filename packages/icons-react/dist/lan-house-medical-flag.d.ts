import React from 'react';

export interface LanHouseMedicalFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalFlag: React.FC<LanHouseMedicalFlagProps>;
export default LanHouseMedicalFlag;
