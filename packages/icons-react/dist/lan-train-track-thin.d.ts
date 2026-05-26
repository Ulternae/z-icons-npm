import React from 'react';

export interface LanTrainTrackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTrackThin: React.FC<LanTrainTrackThinProps>;
export default LanTrainTrackThin;
