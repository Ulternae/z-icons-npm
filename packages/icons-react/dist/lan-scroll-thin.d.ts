import React from 'react';

export interface LanScrollThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollThin: React.FC<LanScrollThinProps>;
export default LanScrollThin;
