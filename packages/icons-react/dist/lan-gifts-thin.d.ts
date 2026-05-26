import React from 'react';

export interface LanGiftsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftsThin: React.FC<LanGiftsThinProps>;
export default LanGiftsThin;
