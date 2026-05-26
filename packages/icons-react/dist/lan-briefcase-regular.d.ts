import React from 'react';

export interface LanBriefcaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseRegular: React.FC<LanBriefcaseRegularProps>;
export default LanBriefcaseRegular;
