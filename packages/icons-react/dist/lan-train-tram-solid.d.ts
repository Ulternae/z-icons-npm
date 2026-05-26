import React from 'react';

export interface LanTrainTramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTramSolid: React.FC<LanTrainTramSolidProps>;
export default LanTrainTramSolid;
