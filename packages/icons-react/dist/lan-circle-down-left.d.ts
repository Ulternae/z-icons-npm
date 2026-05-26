import React from 'react';

export interface LanCircleDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDownLeft: React.FC<LanCircleDownLeftProps>;
export default LanCircleDownLeft;
