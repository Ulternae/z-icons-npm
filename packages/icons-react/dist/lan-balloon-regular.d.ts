import React from 'react';

export interface LanBalloonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloonRegular: React.FC<LanBalloonRegularProps>;
export default LanBalloonRegular;
