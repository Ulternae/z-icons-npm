import React from 'react';

export interface LanBriefcaseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcaseMedical(props: LanBriefcaseMedicalProps): React.ReactElement;
export default LanBriefcaseMedical;
