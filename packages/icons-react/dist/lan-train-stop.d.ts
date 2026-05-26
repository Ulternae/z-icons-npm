import React from 'react';

export interface LanTrainStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainStop: React.FC<LanTrainStopProps>;
export default LanTrainStop;
