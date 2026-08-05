import React from 'react';

export interface LanTrainSubwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSubway(props: LanTrainSubwayProps): React.ReactElement;
export default LanTrainSubway;
