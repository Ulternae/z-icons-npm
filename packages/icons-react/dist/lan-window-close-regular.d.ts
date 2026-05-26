import React from 'react';

export interface LanWindowCloseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowCloseRegular: React.FC<LanWindowCloseRegularProps>;
export default LanWindowCloseRegular;
