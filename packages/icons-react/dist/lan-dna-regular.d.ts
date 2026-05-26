import React from 'react';

export interface LanDnaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDnaRegular: React.FC<LanDnaRegularProps>;
export default LanDnaRegular;
