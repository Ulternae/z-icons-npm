import React from 'react';

export interface MinaLockHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockHexagon: React.FC<MinaLockHexagonProps>;
export default MinaLockHexagon;
