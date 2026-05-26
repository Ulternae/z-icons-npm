import React from 'react';

export interface LanCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeRegular: React.FC<LanCodeRegularProps>;
export default LanCodeRegular;
