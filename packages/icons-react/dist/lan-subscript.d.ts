import React from 'react';

export interface LanSubscriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubscript: React.FC<LanSubscriptProps>;
export default LanSubscript;
