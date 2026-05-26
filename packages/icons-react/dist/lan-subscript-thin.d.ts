import React from 'react';

export interface LanSubscriptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubscriptThin: React.FC<LanSubscriptThinProps>;
export default LanSubscriptThin;
