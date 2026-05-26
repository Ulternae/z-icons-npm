import React from 'react';

export interface LanAntThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAntThin: React.FC<LanAntThinProps>;
export default LanAntThin;
