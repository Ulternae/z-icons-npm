import React from 'react';

export interface LanFutbolBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFutbolBallSolid(props: LanFutbolBallSolidProps): React.ReactElement;
export default LanFutbolBallSolid;
