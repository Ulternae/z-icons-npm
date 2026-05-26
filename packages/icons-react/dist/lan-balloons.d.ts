import React from 'react';

export interface LanBalloonsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBalloons: React.FC<LanBalloonsProps>;
export default LanBalloons;
