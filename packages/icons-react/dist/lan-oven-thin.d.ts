import React from 'react';

export interface LanOvenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOvenThin: React.FC<LanOvenThinProps>;
export default LanOvenThin;
