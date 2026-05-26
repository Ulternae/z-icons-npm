import React from 'react';

export interface LanTrainStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainStopThin: React.FC<LanTrainStopThinProps>;
export default LanTrainStopThin;
