import React from 'react';

export interface LanGarlicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarlicRegular: React.FC<LanGarlicRegularProps>;
export default LanGarlicRegular;
