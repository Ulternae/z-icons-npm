import React from 'react';

export interface LanSackXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackXmarkThin: React.FC<LanSackXmarkThinProps>;
export default LanSackXmarkThin;
