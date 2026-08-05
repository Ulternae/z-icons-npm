import React from 'react';

export interface LanFootballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballBallSolid(props: LanFootballBallSolidProps): React.ReactElement;
export default LanFootballBallSolid;
