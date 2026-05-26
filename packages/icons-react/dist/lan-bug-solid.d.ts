import React from 'react';

export interface LanBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugSolid: React.FC<LanBugSolidProps>;
export default LanBugSolid;
