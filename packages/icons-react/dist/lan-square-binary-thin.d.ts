import React from 'react';

export interface LanSquareBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBinaryThin: React.FC<LanSquareBinaryThinProps>;
export default LanSquareBinaryThin;
