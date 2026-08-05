import React from 'react';

export interface LanTrainSubwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSubwayRegular(props: LanTrainSubwayRegularProps): React.ReactElement;
export default LanTrainSubwayRegular;
