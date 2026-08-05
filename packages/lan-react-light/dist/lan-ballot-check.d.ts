import React from 'react';

export interface LanBallotCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotCheck(props: LanBallotCheckProps): React.ReactElement;
export default LanBallotCheck;
