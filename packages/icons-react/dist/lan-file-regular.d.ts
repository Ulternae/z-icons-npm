import React from 'react';

export interface LanFileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileRegular: React.FC<LanFileRegularProps>;
export default LanFileRegular;
