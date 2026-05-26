import React from 'react';

export interface LanCircleStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStop: React.FC<LanCircleStopProps>;
export default LanCircleStop;
