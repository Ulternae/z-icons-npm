import React from 'react';

export interface LanRugbyBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugbyBallRegular: React.FC<LanRugbyBallRegularProps>;
export default LanRugbyBallRegular;
