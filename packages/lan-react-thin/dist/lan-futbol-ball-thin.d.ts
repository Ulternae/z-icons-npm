import React from 'react';

export interface LanFutbolBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFutbolBallThin(props: LanFutbolBallThinProps): React.ReactElement;
export default LanFutbolBallThin;
