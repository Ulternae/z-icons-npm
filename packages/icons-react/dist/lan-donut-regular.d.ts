import React from 'react';

export interface LanDonutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDonutRegular: React.FC<LanDonutRegularProps>;
export default LanDonutRegular;
