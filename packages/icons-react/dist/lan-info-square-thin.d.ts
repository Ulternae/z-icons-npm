import React from 'react';

export interface LanInfoSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoSquareThin: React.FC<LanInfoSquareThinProps>;
export default LanInfoSquareThin;
