import React from 'react';

export interface LanCircleCediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCedi: React.FC<LanCircleCediProps>;
export default LanCircleCedi;
