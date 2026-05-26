import React from 'react';

export interface LanUserClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserClockRegular: React.FC<LanUserClockRegularProps>;
export default LanUserClockRegular;
