import React from 'react';

export interface LanExpandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandThin: React.FC<LanExpandThinProps>;
export default LanExpandThin;
