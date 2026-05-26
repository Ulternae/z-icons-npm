import React from 'react';

export interface LanBarsSortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsSortThin: React.FC<LanBarsSortThinProps>;
export default LanBarsSortThin;
