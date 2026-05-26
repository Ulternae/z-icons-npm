import React from 'react';

export interface LanHouseMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseMedicalThin: React.FC<LanHouseMedicalThinProps>;
export default LanHouseMedicalThin;
