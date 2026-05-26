import React from 'react';

export interface LanBriefsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefsSolid: React.FC<LanBriefsSolidProps>;
export default LanBriefsSolid;
