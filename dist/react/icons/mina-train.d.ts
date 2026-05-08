import React from 'react';

export interface MinaTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrain: React.FC<MinaTrainProps>;
export default MinaTrain;
