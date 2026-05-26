import React from 'react';

export interface LanNoteMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteMedicalThin: React.FC<LanNoteMedicalThinProps>;
export default LanNoteMedicalThin;
