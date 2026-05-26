import React from 'react';

export interface LanBriefcaseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseMedical: React.FC<LanBriefcaseMedicalProps>;
export default LanBriefcaseMedical;
