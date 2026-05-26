import React from 'react';

export interface LanFileUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileUserThin: React.FC<LanFileUserThinProps>;
export default LanFileUserThin;
