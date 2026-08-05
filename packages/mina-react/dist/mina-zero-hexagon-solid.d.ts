import React from 'react';

export interface MinaZeroHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroHexagonSolid(props: MinaZeroHexagonSolidProps): React.ReactElement;
export default MinaZeroHexagonSolid;
