import React from 'react';

export interface MinaEightHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightHexagonSolid(props: MinaEightHexagonSolidProps): React.ReactElement;
export default MinaEightHexagonSolid;
