import React from 'react';

export interface LanOmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmThin: React.FC<LanOmThinProps>;
export default LanOmThin;
