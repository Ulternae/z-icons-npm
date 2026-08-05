import React from 'react';

export interface MinaPlayHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayHexagonSolid(props: MinaPlayHexagonSolidProps): React.ReactElement;
export default MinaPlayHexagonSolid;
