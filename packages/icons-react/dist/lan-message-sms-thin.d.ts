import React from 'react';

export interface LanMessageSmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageSmsThin: React.FC<LanMessageSmsThinProps>;
export default LanMessageSmsThin;
