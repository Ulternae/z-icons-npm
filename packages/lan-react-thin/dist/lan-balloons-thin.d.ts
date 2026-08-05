import React from 'react';

export interface LanBalloonsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonsThin(props: LanBalloonsThinProps): React.ReactElement;
export default LanBalloonsThin;
