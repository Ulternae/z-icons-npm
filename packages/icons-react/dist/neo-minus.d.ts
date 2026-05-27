import React from 'react';

export interface NeoMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMinus: React.FC<NeoMinusProps>;
export default NeoMinus;
