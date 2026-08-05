import React from 'react';

export interface MinaEuroHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroHexagonSolid(props: MinaEuroHexagonSolidProps): React.ReactElement;
export default MinaEuroHexagonSolid;
