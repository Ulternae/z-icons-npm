import React from 'react';

export interface LanBookMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookMedicalThin: React.FC<LanBookMedicalThinProps>;
export default LanBookMedicalThin;
