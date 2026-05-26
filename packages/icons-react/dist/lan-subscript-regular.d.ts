import React from 'react';

export interface LanSubscriptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubscriptRegular: React.FC<LanSubscriptRegularProps>;
export default LanSubscriptRegular;
