import React from 'react';

export interface LanCirclePProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleP: React.FC<LanCirclePProps>;
export default LanCircleP;
