import React from 'react';

export interface LanSquare3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare3: React.FC<LanSquare3Props>;
export default LanSquare3;
