import React from 'react';

export interface LanRestroomSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomSimple: React.FC<LanRestroomSimpleProps>;
export default LanRestroomSimple;
