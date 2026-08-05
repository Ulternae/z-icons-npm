import React from 'react';

export interface MinaDotsHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsHexagonSolid(props: MinaDotsHexagonSolidProps): React.ReactElement;
export default MinaDotsHexagonSolid;
