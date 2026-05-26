import React from 'react';

export interface LanCodeCompareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCompareRegular: React.FC<LanCodeCompareRegularProps>;
export default LanCodeCompareRegular;
