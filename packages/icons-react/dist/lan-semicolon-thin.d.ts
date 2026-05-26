import React from 'react';

export interface LanSemicolonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSemicolonThin: React.FC<LanSemicolonThinProps>;
export default LanSemicolonThin;
