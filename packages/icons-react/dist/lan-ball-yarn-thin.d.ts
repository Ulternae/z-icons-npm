import React from 'react';

export interface LanBallYarnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallYarnThin: React.FC<LanBallYarnThinProps>;
export default LanBallYarnThin;
