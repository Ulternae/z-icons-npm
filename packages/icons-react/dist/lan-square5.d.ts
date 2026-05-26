import React from 'react';

export interface LanSquare5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare5: React.FC<LanSquare5Props>;
export default LanSquare5;
