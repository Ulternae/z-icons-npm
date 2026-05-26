import React from 'react';

export interface LanBellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellsThin: React.FC<LanBellsThinProps>;
export default LanBellsThin;
