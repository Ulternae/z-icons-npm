import React from 'react';

export interface MinaThreeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeHexagon: React.FC<MinaThreeHexagonProps>;
export default MinaThreeHexagon;
