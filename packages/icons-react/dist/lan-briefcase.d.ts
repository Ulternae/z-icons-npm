import React from 'react';

export interface LanBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcase: React.FC<LanBriefcaseProps>;
export default LanBriefcase;
