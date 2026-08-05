import React from 'react';

export interface LanTrainStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainStop(props: LanTrainStopProps): React.ReactElement;
export default LanTrainStop;
