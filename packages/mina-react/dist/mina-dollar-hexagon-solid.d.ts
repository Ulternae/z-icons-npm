import React from 'react';

export interface MinaDollarHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarHexagonSolid(props: MinaDollarHexagonSolidProps): React.ReactElement;
export default MinaDollarHexagonSolid;
