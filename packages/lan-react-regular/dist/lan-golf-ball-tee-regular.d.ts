import React from 'react';

export interface LanGolfBallTeeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfBallTeeRegular(props: LanGolfBallTeeRegularProps): React.ReactElement;
export default LanGolfBallTeeRegular;
