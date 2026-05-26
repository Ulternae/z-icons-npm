import React from 'react';

export interface LanRestroomSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomSimpleRegular: React.FC<LanRestroomSimpleRegularProps>;
export default LanRestroomSimpleRegular;
