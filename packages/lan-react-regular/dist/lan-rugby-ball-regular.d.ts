import React from 'react';

export interface LanRugbyBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugbyBallRegular(props: LanRugbyBallRegularProps): React.ReactElement;
export default LanRugbyBallRegular;
