import React from 'react';

export interface LanBugsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugs: React.FC<LanBugsProps>;
export default LanBugs;
