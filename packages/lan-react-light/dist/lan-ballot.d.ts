import React from 'react';

export interface LanBallotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallot(props: LanBallotProps): React.ReactElement;
export default LanBallot;
