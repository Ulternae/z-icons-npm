import React from 'react';

export interface LanClockTenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTenRegular: React.FC<LanClockTenRegularProps>;
export default LanClockTenRegular;
