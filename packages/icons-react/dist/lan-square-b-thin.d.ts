import React from 'react';

export interface LanSquareBThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBThin: React.FC<LanSquareBThinProps>;
export default LanSquareBThin;
