import React from 'react';

export interface LanFileFragmentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileFragmentRegular: React.FC<LanFileFragmentRegularProps>;
export default LanFileFragmentRegular;
