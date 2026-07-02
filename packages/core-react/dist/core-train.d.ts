import React from 'react';

export interface CoreTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrain(props: CoreTrainProps): React.ReactElement;
export default CoreTrain;
