import React from 'react';

export interface MinaFiveHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveHexagonSolid(props: MinaFiveHexagonSolidProps): React.ReactElement;
export default MinaFiveHexagonSolid;
