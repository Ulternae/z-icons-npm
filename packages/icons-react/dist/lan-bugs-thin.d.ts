import React from 'react';

export interface LanBugsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugsThin: React.FC<LanBugsThinProps>;
export default LanBugsThin;
