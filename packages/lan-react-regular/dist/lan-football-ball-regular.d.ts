import React from 'react';

export interface LanFootballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballBallRegular(props: LanFootballBallRegularProps): React.ReactElement;
export default LanFootballBallRegular;
