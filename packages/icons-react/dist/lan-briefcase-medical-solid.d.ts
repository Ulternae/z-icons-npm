import React from 'react';

export interface LanBriefcaseMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseMedicalSolid: React.FC<LanBriefcaseMedicalSolidProps>;
export default LanBriefcaseMedicalSolid;
