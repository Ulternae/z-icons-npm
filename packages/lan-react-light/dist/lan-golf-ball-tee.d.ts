import React from 'react';

export interface LanGolfBallTeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfBallTee(props: LanGolfBallTeeProps): React.ReactElement;
export default LanGolfBallTee;
