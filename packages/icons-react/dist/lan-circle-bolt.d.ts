import React from 'react';

export interface LanCircleBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBolt: React.FC<LanCircleBoltProps>;
export default LanCircleBolt;
