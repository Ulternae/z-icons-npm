import React from 'react';

export interface LanSackDollarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackDollarThin: React.FC<LanSackDollarThinProps>;
export default LanSackDollarThin;
