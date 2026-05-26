import React from 'react';

export interface LanTrainStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainStopSolid: React.FC<LanTrainStopSolidProps>;
export default LanTrainStopSolid;
