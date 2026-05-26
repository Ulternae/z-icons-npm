import React from 'react';

export interface LanCirclePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlay: React.FC<LanCirclePlayProps>;
export default LanCirclePlay;
