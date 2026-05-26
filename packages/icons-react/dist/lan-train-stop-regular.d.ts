import React from 'react';

export interface LanTrainStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainStopRegular: React.FC<LanTrainStopRegularProps>;
export default LanTrainStopRegular;
