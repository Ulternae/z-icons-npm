import React from 'react';

export interface LanFileDocThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDocThin: React.FC<LanFileDocThinProps>;
export default LanFileDocThin;
