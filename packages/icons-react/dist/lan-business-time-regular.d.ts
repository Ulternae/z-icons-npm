import React from 'react';

export interface LanBusinessTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusinessTimeRegular: React.FC<LanBusinessTimeRegularProps>;
export default LanBusinessTimeRegular;
