import React from 'react';

export interface LanRvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRvThin: React.FC<LanRvThinProps>;
export default LanRvThin;
