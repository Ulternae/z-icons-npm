import React from 'react';

export interface MinaOneHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneHexagonSolid(props: MinaOneHexagonSolidProps): React.ReactElement;
export default MinaOneHexagonSolid;
