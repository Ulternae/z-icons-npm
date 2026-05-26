import React from 'react';

export interface LanSimCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardThin: React.FC<LanSimCardThinProps>;
export default LanSimCardThin;
