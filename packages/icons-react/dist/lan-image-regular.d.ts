import React from 'react';

export interface LanImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageRegular: React.FC<LanImageRegularProps>;
export default LanImageRegular;
