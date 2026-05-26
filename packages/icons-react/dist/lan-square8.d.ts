import React from 'react';

export interface LanSquare8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare8: React.FC<LanSquare8Props>;
export default LanSquare8;
