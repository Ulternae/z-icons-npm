import React from 'react';

export interface LanServerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanServerRegular: React.FC<LanServerRegularProps>;
export default LanServerRegular;
