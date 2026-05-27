import React from 'react';

export interface CoreTrainSubwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrainSubway: React.FC<CoreTrainSubwayProps>;
export default CoreTrainSubway;
