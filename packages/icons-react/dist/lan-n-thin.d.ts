import React from 'react';

export interface LanNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNThin: React.FC<LanNThinProps>;
export default LanNThin;
