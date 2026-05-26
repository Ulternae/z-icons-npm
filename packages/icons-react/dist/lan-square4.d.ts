import React from 'react';

export interface LanSquare4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare4: React.FC<LanSquare4Props>;
export default LanSquare4;
