import React from 'react';

export interface LanBallYarnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallYarn: React.FC<LanBallYarnProps>;
export default LanBallYarn;
