import React from 'react';

export interface LanYinYangRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYinYangRegular: React.FC<LanYinYangRegularProps>;
export default LanYinYangRegular;
