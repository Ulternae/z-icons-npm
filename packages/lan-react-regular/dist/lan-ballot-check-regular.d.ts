import React from 'react';

export interface LanBallotCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotCheckRegular(props: LanBallotCheckRegularProps): React.ReactElement;
export default LanBallotCheckRegular;
