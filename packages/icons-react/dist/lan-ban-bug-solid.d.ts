import React from 'react';

export interface LanBanBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanBugSolid: React.FC<LanBanBugSolidProps>;
export default LanBanBugSolid;
