import React from 'react';

export interface LanButterflyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButterflyThin: React.FC<LanButterflyThinProps>;
export default LanButterflyThin;
