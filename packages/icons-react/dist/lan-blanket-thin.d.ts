import React from 'react';

export interface LanBlanketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketThin: React.FC<LanBlanketThinProps>;
export default LanBlanketThin;
