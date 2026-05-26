import React from 'react';

export interface LanTrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainThin: React.FC<LanTrainThinProps>;
export default LanTrainThin;
