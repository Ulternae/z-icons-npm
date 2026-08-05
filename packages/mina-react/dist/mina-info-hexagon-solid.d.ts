import React from 'react';

export interface MinaInfoHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoHexagonSolid(props: MinaInfoHexagonSolidProps): React.ReactElement;
export default MinaInfoHexagonSolid;
