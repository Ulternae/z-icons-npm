import React from 'react';

export interface LanSquareShekelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareShekel: React.FC<LanSquareShekelProps>;
export default LanSquareShekel;
