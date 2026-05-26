import React from 'react';

export interface LanUserVneckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVneck: React.FC<LanUserVneckProps>;
export default LanUserVneck;
