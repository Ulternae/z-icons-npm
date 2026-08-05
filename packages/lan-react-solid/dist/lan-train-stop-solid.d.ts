import React from 'react';

export interface LanTrainStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainStopSolid(props: LanTrainStopSolidProps): React.ReactElement;
export default LanTrainStopSolid;
