import React from 'react';

export interface MinaDotsVerticalHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalHexagonSolid(props: MinaDotsVerticalHexagonSolidProps): React.ReactElement;
export default MinaDotsVerticalHexagonSolid;
