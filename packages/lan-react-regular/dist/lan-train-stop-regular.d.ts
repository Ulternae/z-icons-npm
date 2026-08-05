import React from 'react';

export interface LanTrainStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainStopRegular(props: LanTrainStopRegularProps): React.ReactElement;
export default LanTrainStopRegular;
