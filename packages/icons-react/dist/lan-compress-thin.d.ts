import React from 'react';

export interface LanCompressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressThin: React.FC<LanCompressThinProps>;
export default LanCompressThin;
