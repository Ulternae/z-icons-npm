import React from 'react';

export interface LanCirclesOverlapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclesOverlap: React.FC<LanCirclesOverlapProps>;
export default LanCirclesOverlap;
