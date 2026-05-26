import React from 'react';

export interface LanSuitcaseMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseMedicalThin: React.FC<LanSuitcaseMedicalThinProps>;
export default LanSuitcaseMedicalThin;
