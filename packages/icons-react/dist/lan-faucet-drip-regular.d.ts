import React from 'react';

export interface LanFaucetDripRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetDripRegular: React.FC<LanFaucetDripRegularProps>;
export default LanFaucetDripRegular;
