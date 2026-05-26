import React from 'react';

export interface LanBriefcaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseThin: React.FC<LanBriefcaseThinProps>;
export default LanBriefcaseThin;
