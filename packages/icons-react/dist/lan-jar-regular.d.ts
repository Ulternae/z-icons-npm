import React from 'react';

export interface LanJarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarRegular: React.FC<LanJarRegularProps>;
export default LanJarRegular;
