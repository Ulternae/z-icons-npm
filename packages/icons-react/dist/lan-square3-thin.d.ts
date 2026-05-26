import React from 'react';

export interface LanSquare3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare3Thin: React.FC<LanSquare3ThinProps>;
export default LanSquare3Thin;
