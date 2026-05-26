import React from 'react';

export interface LanNonBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNonBinaryThin: React.FC<LanNonBinaryThinProps>;
export default LanNonBinaryThin;
