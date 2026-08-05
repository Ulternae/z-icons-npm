import React from 'react';

export interface LanFootballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballBallThin(props: LanFootballBallThinProps): React.ReactElement;
export default LanFootballBallThin;
