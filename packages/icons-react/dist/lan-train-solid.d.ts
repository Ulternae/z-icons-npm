import React from 'react';

export interface LanTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSolid: React.FC<LanTrainSolidProps>;
export default LanTrainSolid;
