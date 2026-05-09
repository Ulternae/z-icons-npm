import React from 'react';

export interface MinaSearchHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchHexagonSolid: React.FC<MinaSearchHexagonSolidProps>;
export default MinaSearchHexagonSolid;
