import React from 'react';

export interface LanVolleyballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolleyballBallThin(props: LanVolleyballBallThinProps): React.ReactElement;
export default LanVolleyballBallThin;
