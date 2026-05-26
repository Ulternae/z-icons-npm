import React from 'react';

export interface LanTrainSubwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSubwaySolid: React.FC<LanTrainSubwaySolidProps>;
export default LanTrainSubwaySolid;
