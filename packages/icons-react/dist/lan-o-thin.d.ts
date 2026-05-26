import React from 'react';

export interface LanOThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOThin: React.FC<LanOThinProps>;
export default LanOThin;
