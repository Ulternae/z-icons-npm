import React from 'react';

export interface LanTrainTrackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTrackRegular: React.FC<LanTrainTrackRegularProps>;
export default LanTrainTrackRegular;
