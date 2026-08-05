import React from 'react';

export interface MinaPlusHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusHexagonSolid(props: MinaPlusHexagonSolidProps): React.ReactElement;
export default MinaPlusHexagonSolid;
