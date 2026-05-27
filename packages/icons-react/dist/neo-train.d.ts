import React from 'react';

export interface NeoTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrain: React.FC<NeoTrainProps>;
export default NeoTrain;
