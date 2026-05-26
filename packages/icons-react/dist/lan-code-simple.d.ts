import React from 'react';

export interface LanCodeSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeSimple: React.FC<LanCodeSimpleProps>;
export default LanCodeSimple;
