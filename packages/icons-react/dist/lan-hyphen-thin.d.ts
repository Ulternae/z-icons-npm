import React from 'react';

export interface LanHyphenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHyphenThin: React.FC<LanHyphenThinProps>;
export default LanHyphenThin;
