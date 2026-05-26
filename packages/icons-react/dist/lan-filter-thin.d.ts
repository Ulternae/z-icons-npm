import React from 'react';

export interface LanFilterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterThin: React.FC<LanFilterThinProps>;
export default LanFilterThin;
