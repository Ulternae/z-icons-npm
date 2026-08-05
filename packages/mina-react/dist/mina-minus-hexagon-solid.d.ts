import React from 'react';

export interface MinaMinusHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusHexagonSolid(props: MinaMinusHexagonSolidProps): React.ReactElement;
export default MinaMinusHexagonSolid;
