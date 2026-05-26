import React from 'react';

export interface LanCircleOProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleO: React.FC<LanCircleOProps>;
export default LanCircleO;
