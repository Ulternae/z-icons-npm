import React from 'react';

export interface LanSigmaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSigmaRegular: React.FC<LanSigmaRegularProps>;
export default LanSigmaRegular;
