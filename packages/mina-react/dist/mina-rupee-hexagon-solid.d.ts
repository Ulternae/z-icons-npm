import React from 'react';

export interface MinaRupeeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeHexagonSolid(props: MinaRupeeHexagonSolidProps): React.ReactElement;
export default MinaRupeeHexagonSolid;
