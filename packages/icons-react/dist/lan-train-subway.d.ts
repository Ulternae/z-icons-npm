import React from 'react';

export interface LanTrainSubwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSubway: React.FC<LanTrainSubwayProps>;
export default LanTrainSubway;
