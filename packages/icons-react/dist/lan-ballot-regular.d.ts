import React from 'react';

export interface LanBallotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotRegular: React.FC<LanBallotRegularProps>;
export default LanBallotRegular;
