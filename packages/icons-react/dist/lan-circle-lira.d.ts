import React from 'react';

export interface LanCircleLiraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLira: React.FC<LanCircleLiraProps>;
export default LanCircleLira;
