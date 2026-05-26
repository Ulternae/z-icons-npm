import React from 'react';

export interface LanBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusThin: React.FC<LanBusThinProps>;
export default LanBusThin;
