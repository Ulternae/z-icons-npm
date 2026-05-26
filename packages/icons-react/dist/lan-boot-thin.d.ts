import React from 'react';

export interface LanBootThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootThin: React.FC<LanBootThinProps>;
export default LanBootThin;
