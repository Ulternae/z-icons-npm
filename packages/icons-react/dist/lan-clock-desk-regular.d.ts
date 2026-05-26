import React from 'react';

export interface LanClockDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockDeskRegular: React.FC<LanClockDeskRegularProps>;
export default LanClockDeskRegular;
