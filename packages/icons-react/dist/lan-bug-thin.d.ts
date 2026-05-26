import React from 'react';

export interface LanBugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugThin: React.FC<LanBugThinProps>;
export default LanBugThin;
