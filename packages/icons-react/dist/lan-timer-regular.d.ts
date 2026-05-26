import React from 'react';

export interface LanTimerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimerRegular: React.FC<LanTimerRegularProps>;
export default LanTimerRegular;
