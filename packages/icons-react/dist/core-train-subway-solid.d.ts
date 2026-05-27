import React from 'react';

export interface CoreTrainSubwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrainSubwaySolid: React.FC<CoreTrainSubwaySolidProps>;
export default CoreTrainSubwaySolid;
