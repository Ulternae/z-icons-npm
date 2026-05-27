import React from 'react';

export interface CoreTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrainSolid: React.FC<CoreTrainSolidProps>;
export default CoreTrainSolid;
