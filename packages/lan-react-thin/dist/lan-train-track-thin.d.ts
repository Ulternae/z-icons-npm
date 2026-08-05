import React from 'react';

export interface LanTrainTrackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTrackThin(props: LanTrainTrackThinProps): React.ReactElement;
export default LanTrainTrackThin;
