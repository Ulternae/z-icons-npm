import React from 'react';

export interface LanBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBug: React.FC<LanBugProps>;
export default LanBug;
