import React from 'react';

export interface CoreTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrain: React.FC<CoreTrainProps>;
export default CoreTrain;
