import React from 'react';

export interface MinaUserHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserHexagon: React.FC<MinaUserHexagonProps>;
export default MinaUserHexagon;
