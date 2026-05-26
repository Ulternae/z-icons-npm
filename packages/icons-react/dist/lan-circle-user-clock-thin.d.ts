import React from 'react';

export interface LanCircleUserClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserClockThin: React.FC<LanCircleUserClockThinProps>;
export default LanCircleUserClockThin;
