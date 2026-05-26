import React from 'react';

export interface LanPersonSkiJumpingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiJumping: React.FC<LanPersonSkiJumpingProps>;
export default LanPersonSkiJumping;
