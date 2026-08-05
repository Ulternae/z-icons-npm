import React from 'react';

export interface LanVolleyballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolleyballBallRegular(props: LanVolleyballBallRegularProps): React.ReactElement;
export default LanVolleyballBallRegular;
