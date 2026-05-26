import React from 'react';

export interface LanBallotCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotCheckRegular: React.FC<LanBallotCheckRegularProps>;
export default LanBallotCheckRegular;
