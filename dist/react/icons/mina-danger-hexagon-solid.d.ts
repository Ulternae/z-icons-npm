import React from 'react';

export interface MinaDangerHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerHexagonSolid: React.FC<MinaDangerHexagonSolidProps>;
export default MinaDangerHexagonSolid;
