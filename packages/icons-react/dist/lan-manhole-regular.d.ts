import React from 'react';

export interface LanManholeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManholeRegular: React.FC<LanManholeRegularProps>;
export default LanManholeRegular;
