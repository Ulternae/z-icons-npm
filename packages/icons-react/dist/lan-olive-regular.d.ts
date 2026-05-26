import React from 'react';

export interface LanOliveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOliveRegular: React.FC<LanOliveRegularProps>;
export default LanOliveRegular;
