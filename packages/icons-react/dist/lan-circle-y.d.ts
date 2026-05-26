import React from 'react';

export interface LanCircleYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleY: React.FC<LanCircleYProps>;
export default LanCircleY;
