import React from 'react';

export interface MinaSearchHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchHexagon: React.FC<MinaSearchHexagonProps>;
export default MinaSearchHexagon;
