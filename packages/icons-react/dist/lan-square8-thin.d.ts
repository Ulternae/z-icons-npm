import React from 'react';

export interface LanSquare8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare8Thin: React.FC<LanSquare8ThinProps>;
export default LanSquare8Thin;
