import React from 'react';

export interface LanBriefcaseBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseBlankSolid: React.FC<LanBriefcaseBlankSolidProps>;
export default LanBriefcaseBlankSolid;
