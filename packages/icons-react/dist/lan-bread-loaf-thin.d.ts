import React from 'react';

export interface LanBreadLoafThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadLoafThin: React.FC<LanBreadLoafThinProps>;
export default LanBreadLoafThin;
