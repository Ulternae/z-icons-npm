import React from 'react';

export interface LanEscalatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEscalatorThin: React.FC<LanEscalatorThinProps>;
export default LanEscalatorThin;
