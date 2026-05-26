import React from 'react';

export interface LanSquare1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare1Thin: React.FC<LanSquare1ThinProps>;
export default LanSquare1Thin;
