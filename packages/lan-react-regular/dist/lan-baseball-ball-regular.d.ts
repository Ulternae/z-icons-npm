import React from 'react';

export interface LanBaseballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBallRegular(props: LanBaseballBallRegularProps): React.ReactElement;
export default LanBaseballBallRegular;
