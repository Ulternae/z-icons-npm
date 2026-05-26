import React from 'react';

export interface LanSandwichThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSandwichThin: React.FC<LanSandwichThinProps>;
export default LanSandwichThin;
