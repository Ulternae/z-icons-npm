import React from 'react';

export interface LanAsteriskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAsteriskThin: React.FC<LanAsteriskThinProps>;
export default LanAsteriskThin;
