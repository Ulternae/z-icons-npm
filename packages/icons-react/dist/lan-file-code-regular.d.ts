import React from 'react';

export interface LanFileCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCodeRegular: React.FC<LanFileCodeRegularProps>;
export default LanFileCodeRegular;
