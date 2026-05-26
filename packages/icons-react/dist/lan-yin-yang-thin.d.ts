import React from 'react';

export interface LanYinYangThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYinYangThin: React.FC<LanYinYangThinProps>;
export default LanYinYangThin;
