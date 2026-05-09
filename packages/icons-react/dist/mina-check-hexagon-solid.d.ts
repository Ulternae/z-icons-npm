import React from 'react';

export interface MinaCheckHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckHexagonSolid: React.FC<MinaCheckHexagonSolidProps>;
export default MinaCheckHexagonSolid;
