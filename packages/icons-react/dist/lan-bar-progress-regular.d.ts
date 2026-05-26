import React from 'react';

export interface LanBarProgressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressRegular: React.FC<LanBarProgressRegularProps>;
export default LanBarProgressRegular;
