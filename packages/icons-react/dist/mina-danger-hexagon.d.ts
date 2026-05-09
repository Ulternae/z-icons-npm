import React from 'react';

export interface MinaDangerHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerHexagon: React.FC<MinaDangerHexagonProps>;
export default MinaDangerHexagon;
