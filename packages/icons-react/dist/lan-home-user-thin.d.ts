import React from 'react';

export interface LanHomeUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeUserThin: React.FC<LanHomeUserThinProps>;
export default LanHomeUserThin;
