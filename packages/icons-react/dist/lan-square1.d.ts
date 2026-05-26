import React from 'react';

export interface LanSquare1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare1: React.FC<LanSquare1Props>;
export default LanSquare1;
