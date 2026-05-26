import React from 'react';

export interface LanOarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarRegular: React.FC<LanOarRegularProps>;
export default LanOarRegular;
