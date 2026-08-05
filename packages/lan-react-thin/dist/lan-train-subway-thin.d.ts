import React from 'react';

export interface LanTrainSubwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSubwayThin(props: LanTrainSubwayThinProps): React.ReactElement;
export default LanTrainSubwayThin;
