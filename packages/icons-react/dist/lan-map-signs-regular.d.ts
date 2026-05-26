import React from 'react';

export interface LanMapSignsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapSignsRegular: React.FC<LanMapSignsRegularProps>;
export default LanMapSignsRegular;
