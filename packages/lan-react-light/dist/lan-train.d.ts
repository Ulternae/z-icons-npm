import React from 'react';

export interface LanTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrain(props: LanTrainProps): React.ReactElement;
export default LanTrain;
