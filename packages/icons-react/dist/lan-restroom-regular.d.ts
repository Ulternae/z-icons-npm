import React from 'react';

export interface LanRestroomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRestroomRegular: React.FC<LanRestroomRegularProps>;
export default LanRestroomRegular;
