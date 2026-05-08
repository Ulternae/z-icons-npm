import React from 'react';

export interface MinaRewindHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindHexagon: React.FC<MinaRewindHexagonProps>;
export default MinaRewindHexagon;
