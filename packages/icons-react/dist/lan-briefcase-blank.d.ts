import React from 'react';

export interface LanBriefcaseBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseBlank: React.FC<LanBriefcaseBlankProps>;
export default LanBriefcaseBlank;
