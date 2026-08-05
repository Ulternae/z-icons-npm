import React from 'react';

export interface LanTrainStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainStopThin(props: LanTrainStopThinProps): React.ReactElement;
export default LanTrainStopThin;
