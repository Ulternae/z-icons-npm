import React from 'react';

export interface LanSquare9ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare9Thin: React.FC<LanSquare9ThinProps>;
export default LanSquare9Thin;
