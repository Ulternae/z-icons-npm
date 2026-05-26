import React from 'react';

export interface LanCircleTengeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTengeSolid: React.FC<LanCircleTengeSolidProps>;
export default LanCircleTengeSolid;
