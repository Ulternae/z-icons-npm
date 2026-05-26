import React from 'react';

export interface LanBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefcaseSolid: React.FC<LanBriefcaseSolidProps>;
export default LanBriefcaseSolid;
