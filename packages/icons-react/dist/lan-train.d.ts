import React from 'react';

export interface LanTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrain: React.FC<LanTrainProps>;
export default LanTrain;
