import React from 'react';

export interface LanDaggerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDaggerThin: React.FC<LanDaggerThinProps>;
export default LanDaggerThin;
