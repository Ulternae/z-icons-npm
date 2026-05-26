import React from 'react';

export interface LanTrainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainRegular: React.FC<LanTrainRegularProps>;
export default LanTrainRegular;
