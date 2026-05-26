import React from 'react';

export interface LanTrainTrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTrackSolid: React.FC<LanTrainTrackSolidProps>;
export default LanTrainTrackSolid;
