import React from 'react';

export interface LanHeadSideMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideMedical: React.FC<LanHeadSideMedicalProps>;
export default LanHeadSideMedical;
