import React from 'react';

export interface LanCrabThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrabThin: React.FC<LanCrabThinProps>;
export default LanCrabThin;
