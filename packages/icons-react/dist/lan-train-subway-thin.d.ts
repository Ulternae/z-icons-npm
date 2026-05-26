import React from 'react';

export interface LanTrainSubwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSubwayThin: React.FC<LanTrainSubwayThinProps>;
export default LanTrainSubwayThin;
