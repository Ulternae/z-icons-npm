import React from 'react';

export interface LanFaucetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetRegular: React.FC<LanFaucetRegularProps>;
export default LanFaucetRegular;
