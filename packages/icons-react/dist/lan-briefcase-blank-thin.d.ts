import React from 'react';

export interface LanBriefcaseBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseBlankThin: React.FC<LanBriefcaseBlankThinProps>;
export default LanBriefcaseBlankThin;
