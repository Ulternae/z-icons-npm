import React from 'react';

export interface LanWindowMaximizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMaximizeRegular: React.FC<LanWindowMaximizeRegularProps>;
export default LanWindowMaximizeRegular;
