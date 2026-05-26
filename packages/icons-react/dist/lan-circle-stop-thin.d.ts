import React from 'react';

export interface LanCircleStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStopThin: React.FC<LanCircleStopThinProps>;
export default LanCircleStopThin;
