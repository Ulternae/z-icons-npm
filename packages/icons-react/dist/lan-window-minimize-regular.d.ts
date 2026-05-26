import React from 'react';

export interface LanWindowMinimizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMinimizeRegular: React.FC<LanWindowMinimizeRegularProps>;
export default LanWindowMinimizeRegular;
