import React from 'react';

export interface LanCatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatThin: React.FC<LanCatThinProps>;
export default LanCatThin;
