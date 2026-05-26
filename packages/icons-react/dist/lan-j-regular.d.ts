import React from 'react';

export interface LanJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJRegular: React.FC<LanJRegularProps>;
export default LanJRegular;
