import React from 'react';

export interface LanTrainTrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTrackSolid(props: LanTrainTrackSolidProps): React.ReactElement;
export default LanTrainTrackSolid;
