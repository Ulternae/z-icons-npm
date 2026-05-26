import React from 'react';

export interface LanBugsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugsSolid: React.FC<LanBugsSolidProps>;
export default LanBugsSolid;
