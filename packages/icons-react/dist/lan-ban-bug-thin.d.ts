import React from 'react';

export interface LanBanBugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanBugThin: React.FC<LanBanBugThinProps>;
export default LanBanBugThin;
