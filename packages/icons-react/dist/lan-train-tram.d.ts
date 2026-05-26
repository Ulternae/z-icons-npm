import React from 'react';

export interface LanTrainTramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTram: React.FC<LanTrainTramProps>;
export default LanTrainTram;
