import React from 'react';

export interface LanSquareBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBoltThin: React.FC<LanSquareBoltThinProps>;
export default LanSquareBoltThin;
