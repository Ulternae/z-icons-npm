import React from 'react';

export interface LanBriefsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefsThin: React.FC<LanBriefsThinProps>;
export default LanBriefsThin;
