import React from 'react';

export interface LanPersonSkiJumpingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkiJumping(props: LanPersonSkiJumpingProps): React.ReactElement;
export default LanPersonSkiJumping;
