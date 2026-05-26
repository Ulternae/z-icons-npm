import React from 'react';

export interface LanUtilityCanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtilityCanRegular: React.FC<LanUtilityCanRegularProps>;
export default LanUtilityCanRegular;
