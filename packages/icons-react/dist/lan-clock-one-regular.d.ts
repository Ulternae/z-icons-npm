import React from 'react';

export interface LanClockOneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneRegular: React.FC<LanClockOneRegularProps>;
export default LanClockOneRegular;
