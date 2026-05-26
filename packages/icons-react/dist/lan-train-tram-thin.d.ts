import React from 'react';

export interface LanTrainTramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTramThin: React.FC<LanTrainTramThinProps>;
export default LanTrainTramThin;
