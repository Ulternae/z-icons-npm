import React from 'react';

export interface LanTrainSubwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSubwayRegular: React.FC<LanTrainSubwayRegularProps>;
export default LanTrainSubwayRegular;
