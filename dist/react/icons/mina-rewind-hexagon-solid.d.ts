import React from 'react';

export interface MinaRewindHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindHexagonSolid: React.FC<MinaRewindHexagonSolidProps>;
export default MinaRewindHexagonSolid;
