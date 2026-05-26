import React from 'react';

export interface LanSeatsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatsThin: React.FC<LanSeatsThinProps>;
export default LanSeatsThin;
