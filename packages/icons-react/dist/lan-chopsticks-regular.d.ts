import React from 'react';

export interface LanChopsticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChopsticksRegular: React.FC<LanChopsticksRegularProps>;
export default LanChopsticksRegular;
