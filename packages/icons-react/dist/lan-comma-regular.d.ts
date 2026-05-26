import React from 'react';

export interface LanCommaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommaRegular: React.FC<LanCommaRegularProps>;
export default LanCommaRegular;
