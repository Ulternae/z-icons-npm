import React from 'react';

export interface LanTrainTrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTrack(props: LanTrainTrackProps): React.ReactElement;
export default LanTrainTrack;
