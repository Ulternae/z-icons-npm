import React from 'react';

export interface LanTrainTrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTrack: React.FC<LanTrainTrackProps>;
export default LanTrainTrack;
