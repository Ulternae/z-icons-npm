import React from 'react';

export interface LanBallYarnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallYarnRegular: React.FC<LanBallYarnRegularProps>;
export default LanBallYarnRegular;
