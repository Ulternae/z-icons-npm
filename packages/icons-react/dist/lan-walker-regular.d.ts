import React from 'react';

export interface LanWalkerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkerRegular: React.FC<LanWalkerRegularProps>;
export default LanWalkerRegular;
