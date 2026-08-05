import React from 'react';

export interface LanBaseballBatBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatBallRegular(props: LanBaseballBatBallRegularProps): React.ReactElement;
export default LanBaseballBatBallRegular;
