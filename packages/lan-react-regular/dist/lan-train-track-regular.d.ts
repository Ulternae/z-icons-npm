import React from 'react';

export interface LanTrainTrackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTrackRegular(props: LanTrainTrackRegularProps): React.ReactElement;
export default LanTrainTrackRegular;
