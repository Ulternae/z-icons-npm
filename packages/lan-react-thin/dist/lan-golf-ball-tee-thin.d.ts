import React from 'react';

export interface LanGolfBallTeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfBallTeeThin(props: LanGolfBallTeeThinProps): React.ReactElement;
export default LanGolfBallTeeThin;
