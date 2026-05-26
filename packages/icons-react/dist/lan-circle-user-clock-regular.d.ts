import React from 'react';

export interface LanCircleUserClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserClockRegular: React.FC<LanCircleUserClockRegularProps>;
export default LanCircleUserClockRegular;
