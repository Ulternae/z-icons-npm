import React from 'react';

export interface LanSquare2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare2: React.FC<LanSquare2Props>;
export default LanSquare2;
