import React from 'react';

export interface LanSquareTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTThin: React.FC<LanSquareTThinProps>;
export default LanSquareTThin;
