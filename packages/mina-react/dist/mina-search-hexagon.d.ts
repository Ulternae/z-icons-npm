import React from 'react';

export interface MinaSearchHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchHexagon(props: MinaSearchHexagonProps): React.ReactElement;
export default MinaSearchHexagon;
