import React from 'react';

export interface LanAlicornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlicornRegular: React.FC<LanAlicornRegularProps>;
export default LanAlicornRegular;
