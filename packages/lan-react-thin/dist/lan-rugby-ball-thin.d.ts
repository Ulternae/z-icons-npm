import React from 'react';

export interface LanRugbyBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugbyBallThin(props: LanRugbyBallThinProps): React.ReactElement;
export default LanRugbyBallThin;
