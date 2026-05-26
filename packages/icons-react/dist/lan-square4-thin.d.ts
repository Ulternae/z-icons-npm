import React from 'react';

export interface LanSquare4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare4Thin: React.FC<LanSquare4ThinProps>;
export default LanSquare4Thin;
