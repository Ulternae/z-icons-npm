import React from 'react';

export interface LanSquare9Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare9: React.FC<LanSquare9Props>;
export default LanSquare9;
