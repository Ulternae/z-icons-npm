import React from 'react';

export interface LanFireFlameSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameSimple: React.FC<LanFireFlameSimpleProps>;
export default LanFireFlameSimple;
