import React from 'react';

export interface LanOarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarThin: React.FC<LanOarThinProps>;
export default LanOarThin;
