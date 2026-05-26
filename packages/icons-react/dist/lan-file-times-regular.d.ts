import React from 'react';

export interface LanFileTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTimesRegular: React.FC<LanFileTimesRegularProps>;
export default LanFileTimesRegular;
