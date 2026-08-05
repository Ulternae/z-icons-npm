import React from 'react';

export interface MinaAsteriskHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskHexagonSolid(props: MinaAsteriskHexagonSolidProps): React.ReactElement;
export default MinaAsteriskHexagonSolid;
