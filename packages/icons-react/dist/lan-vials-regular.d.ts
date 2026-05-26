import React from 'react';

export interface LanVialsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialsRegular: React.FC<LanVialsRegularProps>;
export default LanVialsRegular;
