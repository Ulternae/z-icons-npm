import React from 'react';

export interface MinaTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrainSolid: React.FC<MinaTrainSolidProps>;
export default MinaTrainSolid;
