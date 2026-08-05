import React from 'react';

export interface LanVolleyballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolleyballBallSolid(props: LanVolleyballBallSolidProps): React.ReactElement;
export default LanVolleyballBallSolid;
