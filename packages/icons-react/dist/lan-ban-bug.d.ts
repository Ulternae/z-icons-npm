import React from 'react';

export interface LanBanBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanBug: React.FC<LanBanBugProps>;
export default LanBanBug;
