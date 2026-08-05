import React from 'react';

export interface LanBalloonsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloons(props: LanBalloonsProps): React.ReactElement;
export default LanBalloons;
