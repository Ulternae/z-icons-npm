import React from 'react';

export interface LanSquare6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare6Thin: React.FC<LanSquare6ThinProps>;
export default LanSquare6Thin;
