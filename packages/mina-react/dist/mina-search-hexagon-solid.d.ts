import React from 'react';

export interface MinaSearchHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchHexagonSolid(props: MinaSearchHexagonSolidProps): React.ReactElement;
export default MinaSearchHexagonSolid;
