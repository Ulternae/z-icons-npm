import React from 'react';

export interface MinaFourHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourHexagonSolid(props: MinaFourHexagonSolidProps): React.ReactElement;
export default MinaFourHexagonSolid;
