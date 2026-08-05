import React from 'react';

export interface LanBalloonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloon(props: LanBalloonProps): React.ReactElement;
export default LanBalloon;
