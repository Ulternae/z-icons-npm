import React from 'react';

export interface LanGolfBallTeeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfBallTeeRegular: React.FC<LanGolfBallTeeRegularProps>;
export default LanGolfBallTeeRegular;
