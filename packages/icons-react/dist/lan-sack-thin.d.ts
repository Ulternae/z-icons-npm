import React from 'react';

export interface LanSackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackThin: React.FC<LanSackThinProps>;
export default LanSackThin;
