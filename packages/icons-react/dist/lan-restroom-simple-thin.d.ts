import React from 'react';

export interface LanRestroomSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomSimpleThin: React.FC<LanRestroomSimpleThinProps>;
export default LanRestroomSimpleThin;
