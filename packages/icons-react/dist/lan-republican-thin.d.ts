import React from 'react';

export interface LanRepublicanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepublicanThin: React.FC<LanRepublicanThinProps>;
export default LanRepublicanThin;
