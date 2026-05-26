import React from 'react';

export interface LanUsersMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersMedicalThin: React.FC<LanUsersMedicalThinProps>;
export default LanUsersMedicalThin;
