import React from 'react';

export interface MinaNineHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineHexagonSolid(props: MinaNineHexagonSolidProps): React.ReactElement;
export default MinaNineHexagonSolid;
