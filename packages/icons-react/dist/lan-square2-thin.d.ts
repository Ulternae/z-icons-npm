import React from 'react';

export interface LanSquare2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare2Thin: React.FC<LanSquare2ThinProps>;
export default LanSquare2Thin;
