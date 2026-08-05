import React from 'react';

export interface LanFutbolBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFutbolBallRegular(props: LanFutbolBallRegularProps): React.ReactElement;
export default LanFutbolBallRegular;
