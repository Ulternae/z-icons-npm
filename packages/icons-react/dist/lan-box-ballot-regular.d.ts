import React from 'react';

export interface LanBoxBallotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxBallotRegular: React.FC<LanBoxBallotRegularProps>;
export default LanBoxBallotRegular;
