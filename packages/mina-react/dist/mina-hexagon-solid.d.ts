import React from 'react';

export interface MinaHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHexagonSolid(props: MinaHexagonSolidProps): React.ReactElement;
export default MinaHexagonSolid;
