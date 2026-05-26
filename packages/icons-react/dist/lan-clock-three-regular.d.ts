import React from 'react';

export interface LanClockThreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThreeRegular: React.FC<LanClockThreeRegularProps>;
export default LanClockThreeRegular;
