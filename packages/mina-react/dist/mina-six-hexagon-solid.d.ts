import React from 'react';

export interface MinaSixHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixHexagonSolid(props: MinaSixHexagonSolidProps): React.ReactElement;
export default MinaSixHexagonSolid;
