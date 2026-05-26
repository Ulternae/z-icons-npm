import React from 'react';

export interface LanHeadSideMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideMedicalThin: React.FC<LanHeadSideMedicalThinProps>;
export default LanHeadSideMedicalThin;
