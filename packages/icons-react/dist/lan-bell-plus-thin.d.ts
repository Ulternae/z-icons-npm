import React from 'react';

export interface LanBellPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellPlusThin: React.FC<LanBellPlusThinProps>;
export default LanBellPlusThin;
